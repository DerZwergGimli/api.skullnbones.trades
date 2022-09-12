"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UDFService = void 0;
const symbol_file = __importStar(require("../constant/searchSymbol.json"));
class UDFService {
    base() {
        return "Working";
    }
    time() {
        return Math.floor(Date.now() / 1000);
    }
    symbol_info() {
        return symbol_file;
    }
    symbols(search_symbol) {
        let symbolInfo = symbol_file;
        for (const [index, value] of symbolInfo.symbol.entries()) {
            if (value === search_symbol)
                return {
                    currency_code: [value],
                    data_status: symbolInfo.data_status,
                    description: [symbolInfo.description[index]],
                    exchange: symbolInfo.data_status,
                    full_name: [symbolInfo.full_name[index]],
                    has_daily: symbolInfo.has_daily,
                    has_intraday: symbolInfo.has_intraday,
                    has_weekly_and_monthly: symbolInfo.has_weekly_and_monthly,
                    listed_exchange: symbolInfo.data_status,
                    minmov: symbolInfo.minmov,
                    minmov2: symbolInfo.minmov2,
                    minmovement: symbolInfo.minmovement,
                    minmovement2: symbolInfo.minmovement2,
                    name: [symbolInfo.name[index]],
                    pricescale: [symbolInfo.pricescale[index]],
                    session: symbolInfo.session,
                    supported_resolutions: symbolInfo.supported_resolutions,
                    symbol: [symbolInfo.symbol[index]],
                    ticker: [symbolInfo.ticker[index]],
                    timezone: symbolInfo.timezone,
                    type: symbolInfo.type,
                };
        }
        return {
            currency_code: [],
            data_status: "",
            description: [],
            exchange: "",
            full_name: [],
            has_daily: false,
            has_intraday: false,
            has_weekly_and_monthly: false,
            listed_exchange: "",
            minmov: 0,
            minmov2: 0,
            minmovement: 0,
            minmovement2: 0,
            name: [],
            pricescale: [],
            session: "",
            supported_resolutions: [],
            symbol: [],
            ticker: [],
            timezone: "",
            type: "",
        };
    }
    search(query, limit, type, exchange) {
        return "None";
    }
}
exports.UDFService = UDFService;
