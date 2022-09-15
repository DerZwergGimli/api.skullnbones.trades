"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const LocalStoreAdapter_1 = require("../../apilibrary/src/adapters/LocalStoreAdapter");
const port = process.env.PORT || 3000;
app_1.app.listen(port, async () => {
    await LocalStoreAdapter_1.localStoreInstance.init();
    console.log(`Example app listening at http://localhost:${port}`);
});
