import { Controller, Get, Query, Route, Tags } from "tsoa";
import { UDFService } from "./udfService";
import { SymbolInfo } from "../interfaces/symbolInfoInterface";
import { UDFSymbolService } from "./udfSymbolService";

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
  public async symbols(@Query() symbol: string): Promise<SymbolInfo> {
    return new UDFService().symbols(symbol);
  }
}

@Route("search")
@Tags("UDF")
export class UDFController_search extends Controller {
  /**
   * Retrieves a symbol-info object searched (advanced) all symbols.
   */
  @Get()
  public async search(
    @Query() query: string,
    @Query() limit: number,
    @Query() type?: string,
    @Query() exchange?: string
  ): Promise<string> {
    return new UDFService().search(query, limit, type, exchange);
  }
}
