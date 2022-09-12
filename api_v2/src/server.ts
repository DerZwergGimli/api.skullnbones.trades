import { app } from "./app";
import localStoreInstance from "./adapters/LocalStoreAdapter";

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  await localStoreInstance.init();
  console.log(`Example app listening at http://localhost:${port}`);
});
