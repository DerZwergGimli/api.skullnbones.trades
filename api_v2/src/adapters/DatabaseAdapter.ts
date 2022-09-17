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

    this.redisClient = createClient({ url: "redis://localhost:6379" });

    this.redisClient.on("error", (error) => console.error(`Error : ${error}`));
    this.redisClient.on("connect", () => console.log("cache init"));
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
    let trades: TradeHistory = {
      c: [],
      h: [],
      l: [],
      o: [],
      s: "",
      t: [],
      v: [],
    };

    const cursor = this.collection?.aggregate(
      get_history_aggregation(symbol, from, to, resolution)
    );

    const data = await cursor?.toArray();

    data?.forEach((d) => {
      trades.o.push(d.open.toFixed(6));
      trades.c.push(d.close.toFixed(6));
      trades.h.push(d.high.toFixed(6));
      trades.l.push(d.low.toFixed(6));
      trades.t.push(d.time_last);
      trades.v.push(d.volume.toFixed(6));
    });
    trades.s = "ok";

    //write data to cache

    return trades;
  }

  private async cacheCheck(query: string): Promise<TradeHistory | undefined> {
    try {
      return (await JSON.parse(
        this.redisClient.json.get(query)
      )) as TradeHistory;
    } catch (err) {
      return undefined;
    }
  }
}

const databaseAdapter = new DatabaseAdapter();

export {databaseAdapter};
