import { GMWorker, Mode } from "./GMWorker/GMWorker"
import { DBClient } from "./Database/DBClient"
import "log-timestamp"

console.log("--- Worker Starting ---")

function getDBClient() {
  return new DBClient(
    process.env.MONGOURL ?? "",
    process.env.MONGODB ?? "js_trades",
    process.env.MONGOCOL ?? "trades"
  )
}

const run_loop = async () => {
  let worker = new GMWorker()
  await worker.run(Mode.LOOP, getDBClient())
}

const run_sync = async () => {
  let worker = new GMWorker()
  await worker.run(Mode.SYNC, getDBClient())
}

switch (process.env.RUNMODE) {
  case "loop": {
    run_loop().catch((err) => console.log(err))
    break
  }
  case "sync": {
    run_sync().catch((err) => console.log(err))
    break
  }
}
