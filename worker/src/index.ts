import { GMWorker, Mode } from "./GMWorker/GMWorker"
import { DBClient } from "./Database/DBClient"
import "log-timestamp"
import { GENESYSGO } from "./constant"
import localStoreInstance from "./adapters/LocalStoreAdapter"

console.log("--- CONFIG ---")
console.log(`MONGOCOL = ${process.env.MONGOCOL}`)
console.log(`MONGODB = ${process.env.MONGODB}`)
console.log(`PORGRESS = ${process.env.PORGRESS}`)
console.log(`RUNMODE = ${process.env.RUNMODE}`)
console.log(`TXLIMIT = ${process.env.TXLIMIT}`)
console.log(`DELAY = ${process.env.DELAY}`)
console.log(`RPC = ${process.env.RPC}`)
console.log("--- Worker Starting ---")

function getDBClient() {
  return new DBClient(
      process.env.MONGOURL ?? "",
      process.env.MONGODB ?? "js_trades",
      process.env.MONGOCOL ?? "trades"
  )
}

const run_loop = async () => {
  await localStoreInstance.init();

  let worker = new GMWorker(process.env.RPC ?? GENESYSGO)
  await worker.run(Mode.LOOP, getDBClient())
}

const run_sync = async () => {
  await localStoreInstance.init();

  let worker = new GMWorker(process.env.RPC ?? GENESYSGO)
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
