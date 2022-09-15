import { app } from "./app";
import { localStoreInstance } from "../../apilibrary/src/adapters/LocalStoreAdapter";
import { databaseAdapter } from "./adapters/DatabaseAdapter";

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  await localStoreInstance.init();
  databaseAdapter.init(process.env.MONGOURL ?? "");
  console.log(`Example app listening at http://localhost:${port}`);
});
