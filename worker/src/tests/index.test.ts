import {ParsedTransactionWithMeta} from "@solana/web3.js"
import tx_in_001 from "./objects/tx_in_001.json"
import tx_out_001 from "./objects/tx_out_001.json"

import tx_in_002 from "./objects/tx_in_002.json"
import tx_out_002 from "./objects/tx_out_002.json"

import tx_in_003 from "./objects/tx_in_003.json"
import tx_out_003 from "./objects/tx_out_003.json"

import {GMWorker} from "../GMWorker/GMWorker"
import localStoreInstance from "../adapters/LocalStoreAdapter"

/* SAMPLE CREATE
  let worker = new GMWorker(SOLANARPC)
  let data_in = await worker.get_parsedTransaction({
    signature:
      "5JZtanPkfCjJtP4Ax8aePk5uuBA7BvedJjz2wQeoJDG56EWSmzo3t1ZNkT9uebJ8SwAXB5oRkh9SrWLZ75JU7YBg",
    err: "undefined",
    memo: "undefined",
    slot: 148466878,
  })
  await write_file("./in.json", data_in)
  if (data_in !== null) {
    let data_out = await worker.map_transaction(data_in)
    await write_file("./out.json", data_out)
  }
*/

describe("testing with various tx-samples for valid output", () => {

  test("should be a valid tx 1", async () => {
    await localStoreInstance.init()

    // @ts-ignore
    const tx: ParsedTransactionWithMeta = tx_in_001
    const worker = new GMWorker()
    const data = worker.map_transaction(tx)

    expect(data).toStrictEqual(tx_out_001)
  })

  test("should be a valid tx 2", async () => {
    await localStoreInstance.init()

    // @ts-ignore
    const tx: ParsedTransactionWithMeta = tx_in_002
    const worker = new GMWorker()
    const data = worker.map_transaction(tx)

    expect(data).toStrictEqual(tx_out_002)
  })

  test("should be a valid tx 3", async () => {
    await localStoreInstance.init()
    
    // @ts-ignore
    const tx: ParsedTransactionWithMeta = tx_in_003
    const worker = new GMWorker()
    const data = worker.map_transaction(tx)

    expect(data).toStrictEqual(tx_out_003)
  })
})

// https://solscan.io/tx/5JZtanPkfCjJtP4Ax8aePk5uuBA7BvedJjz2wQeoJDG56EWSmzo3t1ZNkT9uebJ8SwAXB5oRkh9SrWLZ75JU7YBg
