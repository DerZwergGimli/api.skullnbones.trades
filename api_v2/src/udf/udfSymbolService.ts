import { localStoreInstance } from "apilibrary/dist/adapters/LocalStoreAdapter";
import { TradeHistory } from "../interfaces/DatafeedUDFCompatibleTradeInterface";
import { SymbolAdapter } from "../adapters/SymbolAdapter";
import {
  UdfErrorResponse,
  UdfSearchSymbolsResponse,
} from "../interfaces/DatafeedUDFCompatibleInterfaces";
import { LibrarySymbolInfo } from "../interfaces/DatafeedInterfaces";
import { databaseAdapter } from "../adapters/DatabaseAdapter";

export class UDFSymbolService {
  public symbol_info(): LibrarySymbolInfo {
    let localSymbols = new SymbolAdapter(localStoreInstance.symbolsStore);

    return localSymbols.get_parsed();
  }

  public symbols(search_symbol: string): LibrarySymbolInfo | UdfErrorResponse {
    console.log(search_symbol);

    let localSymbols = new SymbolAdapter(localStoreInstance.symbolsStore);

    try {
      localSymbols.search_symbols_adv(search_symbol);

      return localSymbols.get_parsed();
    } catch (err) {
      return {
        s: "error",
        errmsg: `Error finding symbol: ${search_symbol}`,
      };
    }
  }

  public searchSymbols(
    query: string,
    limit?: number,
    type?: string,
    exchange?: string
  ): UdfSearchSymbolsResponse | UdfErrorResponse {
    let localSymbols = new SymbolAdapter(localStoreInstance.symbolsStore);

    try {
      localSymbols.search_symbols_adv(query, limit, type, exchange);
      return localSymbols.get_searched();
    } catch (err) {
      return {
        s: "error",
        errmsg: `Error finding symbol: ${query}`,
      };
    }
  }

  public async history(
    symbol: string,
    from: number,
    to: number,
    resolution: string
  ): Promise<TradeHistory | UdfErrorResponse> {
    try {
      return await databaseAdapter.query_candleStick(
        symbol,
        resolution,
        from,
        to
      );
    } catch (e) {
      return {
        s: "error",
        errmsg: `Error finding history: ${symbol}`,
      };
    }
  }
}
