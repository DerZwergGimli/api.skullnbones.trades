import { Config } from "../interfaces/configInterface";
import { SymbolInterface } from "../interfaces/symbolInfoInterface";
import localStoreInstance from "../adapters/LocalStoreAdapter";

export class UDFService {
  public base(): string {
    return "Welcome to the Skull&Bones API with UDF-Support";
  }

  public time(): number {
    return Math.floor(Date.now() / 1000);
  }

  public config(): Config {
    let localSymbols = new SymbolInterface(localStoreInstance.symbols);
    return localSymbols.get_config();
  }
}
