import { SymbolInfo } from "../interfaces/symbolInfoInterface";
import * as symbol_file from "../constant/searchSymbol.json";

export class UDFService {
  public base(): string {
    return "Working";
  }

  public time(): number {
    return Math.floor(Date.now() / 1000);
  }

  public symbol_info(): SymbolInfo {
    return symbol_file;
  }

  public symbols(search_symbol: string): SymbolInfo {
    let symbolInfo: SymbolInfo = symbol_file;
    for (const [index, value] of symbolInfo.symbol.entries()) {
      if (value === search_symbol)
        return {
          currency_code: [value],
          data_status: symbolInfo.data_status,
          description: [symbolInfo.description[index]],
          exchange: symbolInfo.data_status,
          full_name: [symbolInfo.full_name[index]],
          has_daily: symbolInfo.has_daily,
          has_intraday: symbolInfo.has_intraday,
          has_weekly_and_monthly: symbolInfo.has_weekly_and_monthly,
          listed_exchange: symbolInfo.data_status,
          minmov: symbolInfo.minmov,
          minmov2: symbolInfo.minmov2,
          minmovement: symbolInfo.minmovement,
          minmovement2: symbolInfo.minmovement2,
          name: [symbolInfo.name[index]],
          pricescale: [symbolInfo.pricescale[index]],
          session: symbolInfo.session,
          supported_resolutions: symbolInfo.supported_resolutions,
          symbol: [symbolInfo.symbol[index]],
          ticker: [symbolInfo.ticker[index]],
          timezone: symbolInfo.timezone,
          type: symbolInfo.type,
        };
    }
    return {
      currency_code: [],
      data_status: "",
      description: [],
      exchange: "",
      full_name: [],
      has_daily: false,
      has_intraday: false,
      has_weekly_and_monthly: false,
      listed_exchange: "",
      minmov: 0,
      minmov2: 0,
      minmovement: 0,
      minmovement2: 0,
      name: [],
      pricescale: [],
      session: "",
      supported_resolutions: [],
      symbol: [],
      ticker: [],
      timezone: "",
      type: "",
    };
  }

  public search(
    query: string,
    limit: number,
    type?: string,
    exchange?: string
  ): string {
    return "None";
  }
}
