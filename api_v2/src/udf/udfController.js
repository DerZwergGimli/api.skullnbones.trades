"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UDFController = void 0;
const tsoa_1 = require("tsoa");
const udfService_1 = require("./udfService");
const udfSymbolService_1 = require("./udfSymbolService");
let UDFController = class UDFController extends tsoa_1.Controller {
    /**
     * Retrieves a status message.
     */
    async base() {
        return new udfService_1.UDFService().base();
    }
    /**
     * Retrieves a timestamp form the server in UTC.
     */
    async time() {
        return new udfService_1.UDFService().time();
    }
    /**
     * Retrieves a config form the server for UDF.
     */
    async config() {
        return new udfService_1.UDFService().config();
    }
    /**
     * Retrieves a symbol-info object containing all symbols.
     */
    async symbol_info(group) {
        return new udfSymbolService_1.UDFSymbolService().symbol_info();
    }
    /**
     * Retrieves a symbol-info object containing searched symbols.
     */
    async symbols(symbol) {
        return new udfSymbolService_1.UDFSymbolService().symbols(symbol);
    }
    /**
     * Retrieves a symbol-info object searched (advanced) all symbols.
     */
    async search(query, limit, type, exchange) {
        return new udfSymbolService_1.UDFSymbolService().searchSymbols(query, limit, type, exchange);
    }
    /**
     * Retrieves a symbol-info object searched (advanced) all symbols.
     */
    async history(symbol, resolution, from, to, countback, currencyCode) {
        return new udfSymbolService_1.UDFSymbolService().history(symbol, from, to, resolution);
    }
};
__decorate([
    (0, tsoa_1.Get)()
], UDFController.prototype, "base", null);
__decorate([
    (0, tsoa_1.Get)("time")
], UDFController.prototype, "time", null);
__decorate([
    (0, tsoa_1.Get)("config")
], UDFController.prototype, "config", null);
__decorate([
    (0, tsoa_1.Get)("symbol_info"),
    __param(0, (0, tsoa_1.Query)())
], UDFController.prototype, "symbol_info", null);
__decorate([
    (0, tsoa_1.Get)("symbols"),
    __param(0, (0, tsoa_1.Query)())
], UDFController.prototype, "symbols", null);
__decorate([
    (0, tsoa_1.Get)("search"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Query)()),
    __param(3, (0, tsoa_1.Query)())
], UDFController.prototype, "search", null);
__decorate([
    (0, tsoa_1.Get)("history"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Query)()),
    __param(3, (0, tsoa_1.Query)()),
    __param(4, (0, tsoa_1.Query)()),
    __param(5, (0, tsoa_1.Query)())
], UDFController.prototype, "history", null);
UDFController = __decorate([
    (0, tsoa_1.Route)(""),
    (0, tsoa_1.Tags)("UDF")
], UDFController);
exports.UDFController = UDFController;
