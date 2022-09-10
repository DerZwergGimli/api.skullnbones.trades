import { Symbol } from "../interfaces/Symbol";
import { StarAtlasAPI } from "../interfaces/StarAtlasAPI";

export function generateSymbol(nft: StarAtlasAPI, pair: string): Symbol {
  return {
    currency_code: pair,
    data_status: "streaming",
    description: nft.name + " " + pair,
    exchange: "StarAtlasGM",
    full_name: nft.name + " " + pair,
    has_daily: false,
    has_intraday: false,
    has_weekly_and_monthly: 0,
    listed_exchange: "GalacticMarket",
    minmov: 0,
    minmov2: 0,
    minmovement: 0,
    minmovement2: 0,
    name: nft.symbol.replace("-", "") + pair,
    pricescale: [100, 100],
    session: "24x7",
    supported_resolutions: ["1D", "1M"],
    symbol: nft.symbol.replace("-", "") + pair,
    ticker: nft.symbol.replace("-", "") + pair,
    timezone: "UTC",
    type: "crypto",
  };
}
