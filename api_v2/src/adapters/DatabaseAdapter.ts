import { Collection, MongoClient } from "mongodb";
import { TradeHistory } from "../interfaces/DatafeedUDFCompatibleTradeInterface";

import { createClient } from "redis";
import { get_history_aggregation } from "../aggregations/history_aggregation";

class DatabaseAdapter {
  private client: MongoClient | undefined;
  private collection: Collection | undefined;

  private redisClient;

  public async init(url: string) {
    this.client = new MongoClient(url);

    this.redisClient = createClient({
      socket: {
        host: process.env.REDISHOST,
        port: 6379,
      },
    });
    this.redisClient.on("error", (error) => console.error(`Error : ${error}`));
    this.redisClient.on("success", () => console.log("cache init"));
    await this.redisClient.connect();

    this.collection = this.client
      .db(process.env.MONGODB)
      .collection(process.env.MONGOCOL ?? "");

    console.log("DatabaseAdapter initialized");
  }

  public async query_candleStick(
    symbol: string,
    resolution: string,
    from: number,
    to: number,
    countback?: number,
    currentyCode?: string
  ): Promise<TradeHistory> {
    const cache_query: string =
      symbol +
        resolution +
        from.toString() +
        to.toString() +
        countback?.toString() +
        currentyCode ?? "";
    let trades: TradeHistory = {
      c: [],
      h: [],
      l: [],
      o: [],
      s: "",
      t: [],
      v: [],
    };

    const cached = this.cacheCheck(cache_query);
    if (cached === 0) {
      const cursor = this.collection?.aggregate(
        get_history_aggregation(symbol, from, to, resolution)
      );

      const data = await cursor?.toArray();

      data?.forEach((d) => {
        trades.o.push(d.open);
        trades.c.push(d.close);
        trades.h.push(d.high);
        trades.l.push(d.low);
        trades.t.push(d.time_last);
        trades.v.push(d.volume);
      });
      trades.s = "ok";

      //write data to cache
      try {
        await this.redisClient.setEx(cache_query, 3600, JSON.stringify(trades));
      } catch (err) {
        console.log(err);
      }
    } else {
      trades = cached;
    }

    return trades;
  }

  private cacheCheck(query: string): any {
    this.redisClient.get(query, (err, data) => {
      if (err) throw err;

      if (data !== null) {
        return data;
      } else {
        return 0;
      }
    });
  }
}

const databaseAdapter = new DatabaseAdapter();

export { databaseAdapter };
