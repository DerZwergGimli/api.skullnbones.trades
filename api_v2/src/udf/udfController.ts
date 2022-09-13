import { Controller, Get, Query, Route, Tags } from "tsoa";
import { UDFService } from "./udfService";
import { SymbolInfo } from "../interfaces/symbolInfoInterface";
import { UDFSymbolService } from "./udfSymbolService";
import { Config } from "../interfaces/configInterface";
import { TradeHistory } from "../interfaces/RootObject";
import { SymbolSearch } from "../interfaces/symbolSearchInterface";

@Route("")
@Tags("UDF")
export class UDFController extends Controller {
  /**
   * Retrieves a status message.
   */
  @Get()
  public async base(): Promise<string> {
    return new UDFService().base();
  }

  /**
   * Retrieves a timestamp form the server in UTC.
   */
  @Get("time")
  public async time(): Promise<number> {
    return new UDFService().time();
  }

  /**
   * Retrieves a config form the server for UDF.
   */
  @Get("config")
  public async config(): Promise<Config> {
    return new UDFService().config();
  }

  /**
   * Retrieves a symbol-info object containing all symbols.
   */
  @Get("symbol_info")
  public async symbol_info(): Promise<SymbolInfo> {
    return new UDFSymbolService().symbol_info();
  }

  /**
   * Retrieves a symbol-info object containing searched symbols.
   */
  @Get("symbols")
  public async symbols(@Query() symbol: string): Promise<SymbolSearch> {
    return new UDFSymbolService().symbols(symbol);
  }

  /**
   * Retrieves a symbol-info object searched (advanced) all symbols.
   */
  @Get("search")
  public async search(
    @Query() query: string,
    @Query() limit: number,
    @Query() type?: string,
    @Query() exchange?: string
  ): Promise<SymbolSearch[]> {
    return new UDFSymbolService().search(query, limit, type, exchange);
  }

  /**
   * Retrieves a symbol-info object searched (advanced) all symbols.
   */
  @Get("history")
  public async history(
    @Query() symbol: string,
    @Query() resolution: string,
    @Query() from: number,
    @Query() to: number,
    @Query() countback?: number,
    @Query() currencyCode?: string
  ): Promise<TradeHistory> {
    return new UDFSymbolService().history(symbol, from, to, resolution);
  }
}
