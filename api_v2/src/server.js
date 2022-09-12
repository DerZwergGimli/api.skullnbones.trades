"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const LocalStoreAdapter_1 = __importDefault(require("./adapters/LocalStoreAdapter"));
const port = process.env.PORT || 3000;
app_1.app.listen(port, async () => {
    await LocalStoreAdapter_1.default.init();
    console.log(`Example app listening at http://localhost:${port}`);
});
