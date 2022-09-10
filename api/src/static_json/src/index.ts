import fetch from "node-fetch";
import { StarAtlasAPI } from "./interfaces/StarAtlasAPI";
import { write_file } from "./WriteFile";
import { SearchSymbol } from "./interfaces/SearchSymbolInterface";
import { generateSymbol } from "./generators/SymbolGenerator";

console.log("Hello");

const pairs = ["ATLAS", "USDC"];

const run = async () => {
  const staratlas_list: StarAtlasAPI[] = await fetch(
    "https://galaxy.staratlas.com/nfts"
  )
    .then((res) => res.json())
    .then((data: any) => {
      return data;
    });

  let searchSymbol: SearchSymbol[] = [];
  staratlas_list.forEach((asset) => {
    pairs.forEach((pair) => {
      searchSymbol.push(generateSymbol(asset, pair));
    });
  });

  await write_file("out/searchSymbol.json", searchSymbol);
  console.log(searchSymbol);
};

run().catch((error) => console.log(error));
