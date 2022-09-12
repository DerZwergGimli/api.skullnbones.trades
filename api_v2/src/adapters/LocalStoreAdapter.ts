import { STARATLASAPIURL } from "../constant/staratlasapi";
import { StarAtlasAPI } from "../interfaces/staratlasapi";
import { AxiosResponse } from "axios";

const axios = require("axios").default;

class LocalStoreAdapter {
  public initialized = false;
  public symbols: string[] = [];
  public exchange = "GalacticMarketplace";
  public type = "NFT";
  public timezone = "UTC";

  public minmov = 0;
  public minmov2 = 0;
  public minmovement = 0;
  public minmovement2 = 0;

  public supported_resolutions = [
    "1",
    "3",
    "5",
    "15",
    "30",
    "60",
    "120",
    "240",
    "360",
    "480",
    "720",
    "1D",
    "3D",
    "1W",
    "1M",
  ];

  public has_intraday = true;
  public has_daily = true;
  public has_weekly_and_monthly = true;
  public data_status = "streaming";
  public session = "24x7";

  private pairs = ["ATLAS", "USDC"];

  public async init() {
    this.symbols = await this.initSymbols();
    this.initialized = true;
    console.log("LocalStoreAdapter initialized");
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
      this.pairs.forEach((pair) => {
        pricescale.push(1000);
      });
    });
    return pricescale;
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
