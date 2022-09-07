import {
  ConfirmedSignatureInfo,
  Connection,
  ParsedTransactionWithMeta,
  PublicKey,
} from "@solana/web3.js"
import { SOLANRPC } from "../const"
import { FLEETPROGRAMID } from "../const/programids"
import cliProgress from "cli-progress"
import * as solana_instruction from "../structs/solana/InnerInstruction"
import * as db from "../structs/db/db_entry"
import { DBEntry } from "../structs/db/db_entry"
import { sleep } from "../helper/Loop"
import { DBClient } from "../Database/DBClient"

export enum Mode {
  SYNC = "sync",
  LOOP = "loop",
}

interface Stats {
  fetched_transactions: number
  valid_transactions: number
  inserted_transactions: number
}

export class GMWorker {
  private program_id = FLEETPROGRAMID
  private connection: Connection
  private before_timestamp: string | undefined
  private progress_bar: cliProgress.SingleBar
  private stats: Stats = {
    fetched_transactions: 0,
    valid_transactions: 0,
    inserted_transactions: 0,
  }

  public constructor() {
    this.connection = new Connection(SOLANRPC)
    this.progress_bar = new cliProgress.SingleBar(
      {},
      cliProgress.Presets.shades_classic
    )
  }

  public async run(mode: Mode | undefined, db_client: DBClient) {
    do {
      this.stats = {
        fetched_transactions: 0,
        valid_transactions: 0,
        inserted_transactions: 0,
      }

      let signature_list = await this.get_signatures(this.before_timestamp)
      let transaction_list: ParsedTransactionWithMeta[] = []
      this.stats.fetched_transactions = signature_list.length

      if (process.env.PORGRESS == "true") {
        this.progress_bar.start(this.stats.fetched_transactions, 0)
      }
      for (const signature of signature_list) {
        let transaction = await this.get_transactions(signature)
        if (transaction !== null) {
          transaction_list.push(transaction)
        }
        if (process.env.PORGRESS == "true") {
          this.progress_bar.increment()
        }
        await sleep(250)
      }

      if (process.env.PORGRESS == "true") {
        this.progress_bar.stop()
      }

      if (mode == Mode.SYNC) {
        this.before_timestamp =
          signature_list[signature_list.length - 1].signature
      }

      transaction_list = this.filter_transactions(transaction_list)
      this.stats.valid_transactions = transaction_list.length

      let db_entries: DBEntry[] = []
      transaction_list.forEach((transaction) =>
        db_entries.push(this.map_transaction(transaction))
      )

      this.stats.inserted_transactions =
        (await db_client.insert_data(db_entries)) ?? 0

      this.printStats(mode?.toString() ?? "none")

      await sleep(1000)
    } while (mode)
  }

  private async get_signatures(
    before: string | undefined
  ): Promise<ConfirmedSignatureInfo[]> {
    return await this.connection.getSignaturesForAddress(
      new PublicKey(this.program_id),
      {
        limit: parseInt(process.env.TXLIMIT ?? "10"),
        before,
      },
      "finalized"
    )
  }

  private get_transactions(
    signature: ConfirmedSignatureInfo
  ): Promise<ParsedTransactionWithMeta | null> {
    return this.connection.getParsedTransaction(
      signature.signature,
      "finalized"
    )
  }

  private filter_transactions(
    transactions: ParsedTransactionWithMeta[]
  ): ParsedTransactionWithMeta[] {
    return transactions.filter((transaction) =>
      transaction?.meta?.logMessages?.some((log) =>
        log.includes("ProcessExchange")
      )
    )
  }

  private map_transaction(transaction: ParsedTransactionWithMeta): DBEntry {
    let parentInstructions: solana_instruction.ParentInstruction[] = []
    transaction?.meta?.innerInstructions?.forEach((i) => {
      parentInstructions.push(
        solana_instruction.Convert.toInnerInstruction(JSON.stringify(i, null))
      )
    })

    return db.Convert.toDBEntry(
      transaction?.blockTime ?? 0,
      transaction?.slot ?? 0,
      transaction?.transaction?.signatures[0],
      parentInstructions
    )
  }

  private printStats(mode: string) {
    console.log(
      `Mode: ${mode}\t Fetched: ${this.stats.fetched_transactions}\t Trades: ${this.stats.valid_transactions}\t Inserted: ${this.stats.inserted_transactions}`
    )
  }
}
