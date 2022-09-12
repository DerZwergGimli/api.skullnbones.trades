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
exports.UDFController_search = exports.UDFController = void 0;
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
     * Retrieves a symbol-info object containing all symbols.
     */
    async symbol_info() {
        return new udfSymbolService_1.UDFSymbolService().symbol_info();
    }
    /**
     * Retrieves a symbol-info object containing searched symbols.
     */
    async symbols(symbol) {
        return new udfService_1.UDFService().symbols(symbol);
    }
};
__decorate([
    (0, tsoa_1.Get)()
], UDFController.prototype, "base", null);
__decorate([
    (0, tsoa_1.Get)("time")
], UDFController.prototype, "time", null);
__decorate([
    (0, tsoa_1.Get)("symbol_info")
], UDFController.prototype, "symbol_info", null);
__decorate([
    (0, tsoa_1.Get)("symbols"),
    __param(0, (0, tsoa_1.Query)())
], UDFController.prototype, "symbols", null);
UDFController = __decorate([
    (0, tsoa_1.Route)(""),
    (0, tsoa_1.Tags)("UDF")
], UDFController);
exports.UDFController = UDFController;
let UDFController_search = class UDFController_search extends tsoa_1.Controller {
    /**
     * Retrieves a symbol-info object searched (advanced) all symbols.
     */
    async search(query, limit, type, exchange) {
        return new udfService_1.UDFService().search(query, limit, type, exchange);
    }
};
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Query)()),
    __param(3, (0, tsoa_1.Query)())
], UDFController_search.prototype, "search", null);
UDFController_search = __decorate([
    (0, tsoa_1.Route)("search"),
    (0, tsoa_1.Tags)("UDF")
], UDFController_search);
exports.UDFController_search = UDFController_search;
