import { Controller, Get, Query, Route } from "tsoa";
import { UDFService } from "./udfService";
import { SymbolInfo } from "../interfaces/symbolInfoInterface";

@Route("/")
export class UDFController_base extends Controller {
  @Get()
  public async base(): Promise<string> {
    return new UDFService().base();
  }
}

@Route("time")
export class UDFController_time extends Controller {
  @Get()
  public async time(): Promise<number> {
    return new UDFService().time();
  }
}

@Route("symbol_info")
export class UDFController_symbolInfo extends Controller {
  @Get()
  public async symbol_info(): Promise<SymbolInfo> {
    return new UDFService().symbol_info();
  }
}

@Route("symbols")
export class UDFController_symbols extends Controller {
  @Get()
  public async symbols(@Query() symbol: string): Promise<SymbolInfo> {
    return new UDFService().symbols(symbol);
  }
}

@Route("search")
export class UDFController_search extends Controller {
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
