import { Collection, MongoClient } from "mongodb";
import { TradeHistory } from "../interfaces/DatafeedUDFCompatibleTradeInterface";

class DatabaseAdapter {
  private client: MongoClient | undefined;
  private collection: Collection | undefined;

  public init(url: string) {
    this.client = new MongoClient(url);

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
    const cursor = this.collection?.aggregate([
      {
        $match: {
          "trade.symbol": symbol,
        },
      },
      {
        $match: {
          timestamp: { $lt: to, $gt: from },
        },
      },
      {
        $addFields: {
          time: {
            $toDate: {
              $multiply: ["$timestamp", 1000],
            },
          },
          symbol: "$trade.symbol",
          price: "$trade.cost_price",
          volume: "$trade.size",
        },
      },
      {
        $sort: {
          timestamp: -1,
        },
      },
      {
        $group: {
          _id: {
            time: {
              $dateTrunc: {
                date: "$time",
                unit: "minute",
                binSize: parseInt(resolution),
              },
            },
          },
          time_last: {
            $last: "$timestamp",
          },
          high: {
            $max: "$price",
          },
          low: {
            $min: "$price",
          },
          open: {
            $first: "$price",
          },
          close: {
            $last: "$price",
          },
          volume: {
            $sum: "$volume",
          },
        },
      },
    ]);

    const data = await cursor?.toArray();
    let trades: TradeHistory = {
      c: [],
      h: [],
      l: [],
      o: [],
      s: "",
      t: [],
      v: [],
    };

    console.log(data?.length);

    data?.forEach((d) => {
      trades.o.push(d.open);
      trades.c.push(d.close);
      trades.h.push(d.high);
      trades.l.push(d.low);
      trades.t.push(d.time_last);
      trades.v.push(d.volume);
    });
    trades.s = "ok";
    return trades;
  }
}

const databaseAdapter = new DatabaseAdapter();

export { databaseAdapter };
