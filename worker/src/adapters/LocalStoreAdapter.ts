import { StarAtlasAPI } from "../interfaces/StarAtlasAPI"
import { STARATLASAPIURL } from "../constant/staratlasapi"
import { AxiosResponse } from "axios"

const axios = require("axios").default

interface Symbols {
  symbol: string
  mint: string
}

interface Currency {
  symbol: string
  mint: string
}

class LocalStoreAdapter {
  public initialized = false
  public symbolsStore: Symbols[] = []
  public currencyStore: Currency[] = [
    {
      symbol: "USDC",
      mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    },
    {
      symbol: "ATLAS",
      mint: "ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx",
    },
  ]

  public async init() {
    this.symbolsStore = await this.initSymbols()
    this.initialized = true
    console.log("LocalStoreAdapter initialized")
  }

  private async initSymbols(): Promise<Symbols[]> {
    let staratlas_list: StarAtlasAPI[] = []

    await axios
      .get(STARATLASAPIURL)
      .then((response: AxiosResponse<StarAtlasAPI[]>) => {
        staratlas_list = response.data
      })

    let symbols: Symbols[] = []
    staratlas_list.forEach((asset) => {
      symbols.push({
        symbol: asset.symbol,
        mint: asset.mint,
      })
    })

    return symbols
  }
}

const localStoreInstance = new LocalStoreAdapter()
export = localStoreInstance
