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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UDFController_search = exports.UDFController_symbols = exports.UDFController_symbolInfo = exports.UDFController_time = exports.UDFController_base = void 0;
const tsoa_1 = require("tsoa");
const udfService_1 = require("./udfService");
let UDFController_base = class UDFController_base extends tsoa_1.Controller {
    base() {
        return __awaiter(this, void 0, void 0, function* () {
            return new udfService_1.UDFService().base();
        });
    }
};
__decorate([
    (0, tsoa_1.Get)()
], UDFController_base.prototype, "base", null);
UDFController_base = __decorate([
    (0, tsoa_1.Route)("/")
], UDFController_base);
exports.UDFController_base = UDFController_base;
let UDFController_time = class UDFController_time extends tsoa_1.Controller {
    time() {
        return __awaiter(this, void 0, void 0, function* () {
            return new udfService_1.UDFService().time();
        });
    }
};
__decorate([
    (0, tsoa_1.Get)()
], UDFController_time.prototype, "time", null);
UDFController_time = __decorate([
    (0, tsoa_1.Route)("time")
], UDFController_time);
exports.UDFController_time = UDFController_time;
let UDFController_symbolInfo = class UDFController_symbolInfo extends tsoa_1.Controller {
    symbol_info() {
        return __awaiter(this, void 0, void 0, function* () {
            return new udfService_1.UDFService().symbol_info();
        });
    }
};
__decorate([
    (0, tsoa_1.Get)()
], UDFController_symbolInfo.prototype, "symbol_info", null);
UDFController_symbolInfo = __decorate([
    (0, tsoa_1.Route)("symbol_info")
], UDFController_symbolInfo);
exports.UDFController_symbolInfo = UDFController_symbolInfo;
let UDFController_symbols = class UDFController_symbols extends tsoa_1.Controller {
    symbols(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            return new udfService_1.UDFService().symbols(symbol);
        });
    }
};
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)())
], UDFController_symbols.prototype, "symbols", null);
UDFController_symbols = __decorate([
    (0, tsoa_1.Route)("symbols")
], UDFController_symbols);
exports.UDFController_symbols = UDFController_symbols;
let UDFController_search = class UDFController_search extends tsoa_1.Controller {
    search(query, limit, type, exchange) {
        return __awaiter(this, void 0, void 0, function* () {
            return new udfService_1.UDFService().search(query, limit, type, exchange);
        });
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
    (0, tsoa_1.Route)("search")
], UDFController_search);
exports.UDFController_search = UDFController_search;
