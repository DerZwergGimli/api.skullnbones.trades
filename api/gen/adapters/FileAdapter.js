class FileAdapter {
  static getSymbols(): JSON {
    return require("./files/searchSymbol.json");
  }
}

export { FileAdapter };
