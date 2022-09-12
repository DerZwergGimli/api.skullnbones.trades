import { SymbolInfo } from "../interfaces/symbolInfoInterface";
import * as symbol_file from "../constant/searchSymbol.json";
import localStoreInstance from "../adapters/LocalStoreAdapter";

export class UDFSymbolService {
  public symbol_info(): SymbolInfo {
    return {
      currency_code: localStoreInstance.symbols,
      data_status: localStoreInstance.data_status,
      description: localStoreInstance.get_currency_codes(),
      exchange: localStoreInstance.exchange,
      full_name: localStoreInstance.get_currency_codes(),
      has_daily: localStoreInstance.has_daily,
      has_intraday: localStoreInstance.has_intraday,
      has_weekly_and_monthly: localStoreInstance.has_weekly_and_monthly,
      listed_exchange: localStoreInstance.exchange,
      minmov: localStoreInstance.minmov,
      minmov2: localStoreInstance.minmov2,
      minmovement: localStoreInstance.minmovement,
      minmovement2: localStoreInstance.minmovement2,
      name: localStoreInstance.get_currency_codes(),
      pricescale: localStoreInstance.get_pricescale(),
      session: localStoreInstance.session,
      supported_resolutions: localStoreInstance.supported_resolutions,
      symbol: localStoreInstance.get_currency_codes(),
      ticker: localStoreInstance.get_currency_codes(),
      timezone: localStoreInstance.timezone,
      type: localStoreInstance.type,
    };
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
