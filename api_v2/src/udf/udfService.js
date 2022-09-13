"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UDFService = void 0;
const LocalStoreAdapter_1 = __importDefault(require("../adapters/LocalStoreAdapter"));
const SymbolAdapter_1 = require("../adapters/SymbolAdapter");
class UDFService {
    base() {
        return "Welcome to the Skull&Bones API with UDF-Support";
    }
    time() {
        return Math.floor(Date.now() / 1000);
    }
    config() {
        let localSymbols = new SymbolAdapter_1.SymbolAdapter(LocalStoreAdapter_1.default.symbols);
        return localSymbols.get_config();
    }
}
exports.UDFService = UDFService;
