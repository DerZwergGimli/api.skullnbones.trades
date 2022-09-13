import { StarAtlasAPI } from "../interfaces/staratlasapi";
import { STARATLASAPIURL } from "../constant/staratlasapi";
import { AxiosResponse } from "axios";

const axios = require("axios").default;

class LocalStoreAdapter {
  public initialized = false;
  public symbols: string[] = [];

  public async init() {
    this.symbols = await this.initSymbols();
    this.initialized = true;
    console.log("LocalStoreAdapter initialized");
  }

  private async initSymbols(): Promise<string[]> {
    let staratlas_list: StarAtlasAPI[] = [];

    await axios
      .get(STARATLASAPIURL)
      .then((response: AxiosResponse<StarAtlasAPI[]>) => {
        staratlas_list = response.data;
      });

    let symbols: string[] = [];
    staratlas_list.forEach((asset) => {
      symbols.push(asset.symbol);
    });

    return symbols;
  }
}

const localStoreInstance = new LocalStoreAdapter();
export = localStoreInstance;
