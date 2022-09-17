export function get_history_aggregation(symbol, from, to, resolution) {
  return [
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
  ];
}
