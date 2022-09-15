"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UDFService = void 0;
const LocalStoreAdapter_1 = require("../../../apilibrary/src/adapters/LocalStoreAdapter");
const SymbolAdapter_1 = require("../adapters/SymbolAdapter");
class UDFService {
    base() {
        return "Welcome to the Skull&Bones API with UDF-Support";
    }
    time() {
        return Math.floor(Date.now() / 1000);
    }
    config() {
        let localSymbols = new SymbolAdapter_1.SymbolAdapter(LocalStoreAdapter_1.localStoreInstance.symbolsStore);
        return localSymbols.get_config();
    }
}
exports.UDFService = UDFService;
