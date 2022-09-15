import { StarAtlasAPI } from "../interfaces/StarAtlasAPI";
import { STARATLASAPIURL } from "../constant/staratlasapi";
import { AxiosResponse } from "axios";
import { Symbol } from "../interfaces/Symbol";
import { Currency } from "../interfaces/Currency";

const axios = require("axios").default;

class LocalStoreAdapter {
  public initialized = false;
  public symbolsStore: Symbol[] = [];
  public currencyStore: Currency[] = [
    {
      symbol: "USDC",
      mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    },
    {
      symbol: "ATLAS",
      mint: "ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx",
    },
  ];

  public async init() {
    this.symbolsStore = await this.initSymbols();
    this.initialized = true;
    console.log("LocalStoreAdapter initialized");
  }

  private async initSymbols(): Promise<Symbol[]> {
    let staratlas_list: StarAtlasAPI[] = [];

    await axios
      .get(STARATLASAPIURL)
      .then((response: AxiosResponse<StarAtlasAPI[]>) => {
        staratlas_list = response.data;
      });

    let symbols: Symbol[] = [];
    staratlas_list.forEach((asset) => {
      symbols.push({
        symbol: asset.symbol,
        mint: asset.mint,
      });
    });

    return symbols;
  }
}

const localStoreInstance = new LocalStoreAdapter();
export { localStoreInstance };
