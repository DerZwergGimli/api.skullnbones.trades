import {
  UdfCompatibleConfiguration,
  UdfSearchSymbolsResponse,
} from "../interfaces/DatafeedUDFCompatibleInterfaces";
import {
  LibrarySymbolInfo,
  ResolutionString,
} from "../interfaces/DatafeedInterfaces";

export class SymbolAdapter {
  public symbols: string[] = [];
  public exchange = "GalacticMarketplace";
  public type = "NFT";
  public timezone = "UTC";
  public minmov = 1;
  public minmov2 = 1;
  public minmovement = 0;
  public minmovement2 = 0;
  public supported_resolutions = [
    "1" as ResolutionString,
    "5" as ResolutionString,
    "15" as ResolutionString,
    "30" as ResolutionString,
    "60" as ResolutionString,
    "1D" as ResolutionString,
    "1W" as ResolutionString,
    "1M" as ResolutionString,
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

  public get_parsed(): LibrarySymbolInfo {
    return {
      format: "price",
      currency_code: "USDC",
      data_status: "streaming",
      description: this.get_description()[0],
      exchange: this.exchange,
      full_name: this.get_currency_codes()[0],
      has_daily: false,
      has_intraday: this.has_intraday,
      has_weekly_and_monthly: this.has_weekly_and_monthly,
      listed_exchange: this.exchange,
      minmov: this.minmov,
      name: this.symbols[0],
      pricescale: this.get_pricescale()[0],
      session: this.session,
      supported_resolutions: this.supported_resolutions,
      ticker: this.get_currency_codes()[0],
      timezone: "Etc/UTC",
      type: this.type,
    };
  }

  public get_searched(): UdfSearchSymbolsResponse {
    const symbolSearch: UdfSearchSymbolsResponse = [];

    for (const [index, value] of this.symbols.entries()) {
      symbolSearch.push({
        description: this.get_description()[index],
        exchange: this.exchange,
        full_name: value + "/USDC",
        symbol: value,
        ticker: "",
        type: this.type,
      });
    }

    return symbolSearch;
  }

  public get_config(): UdfCompatibleConfiguration {
    return {
      exchanges: [{ value: this.exchange, name: "AAA", desc: "AAAAA" }],
      supported_resolutions: this.supported_resolutions,
      supports_search: this.supports_search,
      supports_marks: false,
      currency_codes: this.get_currency_codes(),
      supports_time: true,
      supports_timescale_marks: false,
      symbols_types: [{ value: this.type, name: "nfts" }],
    };
  }
}
