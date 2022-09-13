import { Config } from "./configInterface";
import { SymbolDetail } from "./SymbolDetail";
import { SymbolSearch } from "./symbolSearchInterface";

export interface SymbolInfo {
  symbol: string[];
  ticker: string[];
  name: string[];
  full_name: string[];
  description: string[];
  exchange: string;
  listed_exchange: string;
  type: string;
  currency_code: string[];
  session: string;
  timezone: string;
  minmovement: number;
  minmov: number;
  minmovement2: number;
  minmov2: number;
  pricescale: number[];
  supported_resolutions: string[];
  has_intraday: boolean;
  has_daily: boolean;
  has_weekly_and_monthly: boolean;
  data_status: string;
}

export class SymbolInterface {
  public symbols: string[] = [];
  public exchange = "GalacticMarketplace";
  public type = "NFT";
  public timezone = "UTC";
  public minmov = 1;
  public minmov2 = 1;
  public minmovement = 0;
  public minmovement2 = 0;
  public supported_resolutions = [
    "1",
    "3",
    "5",
    "15",
    "30",
    "60",
    "120",
    "240",
    "360",
    "480",
    "720",
    "1D",
    "3D",
    "1W",
    "1M",
  ];
  public has_intraday = true;
  public has_daily = true;
  public has_weekly_and_monthly = true;
  public data_status = "streaming";
  public session = "24x7";
  private supports_search = true;
  private pairs = ["ATLAS", "USDC"];

  constructor(symbols: string[]) {
    this.symbols = symbols;
  }

  public get_currency_codes(): string[] {
    let currency_codes: string[] = [];
    this.symbols.forEach((symbol) => {
      this.pairs.forEach((pair) => {
        currency_codes.push(symbol + pair);
      });
    });
    return currency_codes;
  }

  public get_description(): string[] {
    let currency_codes: string[] = [];
    this.symbols.forEach((symbol) => {
      this.pairs.forEach((pair) => {
        currency_codes.push(symbol + " / " + pair);
      });
    });
    return currency_codes;
  }

  public get_pricescale(): number[] {
    let pricescale: number[] = [];
    this.symbols.forEach((symbol) => {
      pricescale.push(1);
    });

    return pricescale;
  }

  public search_symbols(search_symbol: string) {
    let currency_codes: string[] = [];
    this.symbols.forEach((symbol) => {
      this.pairs.forEach((pair) => {
        currency_codes.push(symbol + pair);
      });
    });
    console.log(search_symbol);
    //TODO Make better filtering
    this.symbols = currency_codes.filter((code) =>
      code.includes(search_symbol)
    );
    this.symbols.map((symbol) => symbol.replace("BTC", ""));
    this.symbols.map((symbol) => symbol.replace("USDC", ""));
  }

  public search_symbols_adv(
    query: string,
    limit: number,
    type?: string,
    exchange?: string
  ) {
    let currency_codes: string[] = [];
    this.symbols.forEach((symbol) => {
      this.pairs.forEach((pair) => {
        currency_codes.push(symbol + pair);
      });
    });

    //TODO Make better filtering sec adv
    this.symbols = currency_codes.filter((code) => code.includes(query));
    this.symbols.map((symbol) => symbol.replace("BTC", ""));
    this.symbols.map((symbol) => symbol.replace("USDC", ""));
    this.symbols.splice(limit);
  }

  public get_details(): SymbolDetail {
    return {
      currency_code: this.symbols[0],
      data_status: this.data_status,
      description: this.get_description()[0],
      exchange: this.exchange,
      full_name: this.get_currency_codes()[0],
      has_daily: this.has_daily,
      has_intraday: this.has_intraday,
      has_weekly_and_monthly: this.has_weekly_and_monthly,
      listed_exchange: this.exchange,
      minmov: this.minmov,
      minmov2: this.minmov2,
      minmovement: this.minmovement,
      minmovement2: this.minmovement2,
      name: this.get_currency_codes()[0],
      pricescale: this.get_pricescale()[0] ?? 100,
      session: this.session,
      supported_resolutions: this.supported_resolutions,
      symbol: this.get_currency_codes()[0],
      ticker: this.get_currency_codes()[0],
      timezone: this.timezone,
      type: this.type,
    };
  }

  public get_parsed(): SymbolInfo {
    return {
      currency_code: this.symbols,
      data_status: this.data_status,
      description: this.get_description(),
      exchange: this.exchange,
      full_name: this.get_currency_codes(),
      has_daily: this.has_daily,
      has_intraday: this.has_intraday,
      has_weekly_and_monthly: this.has_weekly_and_monthly,
      listed_exchange: this.exchange,
      minmov: this.minmov,
      minmov2: this.minmov2,
      minmovement: this.minmovement,
      minmovement2: this.minmovement2,
      name: this.get_currency_codes(),
      pricescale: this.get_pricescale(),
      session: this.session,
      supported_resolutions: this.supported_resolutions,
      symbol: this.get_currency_codes(),
      ticker: this.get_currency_codes(),
      timezone: this.timezone,
      type: this.type,
    };
  }

  public get_searched(): SymbolSearch[] {
    const symbolSearch: SymbolSearch[] = [];
    this.symbols.forEach((symbol) => {
      symbolSearch.push({
        description: this.get_description()[0],
        exchange: this.exchange,
        full_name: symbol + "USDC",
        symbol: symbol,
        type: this.type,
      });
    });

    return symbolSearch;
  }

  public get_config(): Config {
    return {
      exchanges: [{ value: this.exchange, name: "AAA", desc: "AAAAA" }],
      supported_resolutions: this.supported_resolutions,
      supports_group_request: false,
      supports_marks: false,
      supports_search: this.supports_search,
      supports_time: true,
      supports_timescale_marks: false,
      symbols_types: [{ value: this.type, name: "nfts" }],
    };
  }
}
