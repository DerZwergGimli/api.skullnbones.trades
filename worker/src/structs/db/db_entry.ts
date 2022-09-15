import { ParentInstruction } from "../solana/InnerInstruction"

export interface DBEntry {
  timestamp: number
  block: number
  signature: string
  instructions: Instruction[]
  trade: Trade
}

export interface Trade {
  cost_price: number
  cost_total: number
  size: number
  side: number // 0 Buy, 1, Sell
}

export interface Instruction {
  token_program: string
  source: string
  destination: string
  authority: string
  mint: string
  uiAmount: number
  amount: number
  decimals: number
}

export class DBConverter {
  public static toDBEntry(
      timestamp: number,
      block: number,
      signature: string,
      parent_instructions: ParentInstruction[]
  ): DBEntry {
    this.parse_price(parent_instructions)

    let entry: DBEntry = {
      block,
      signature,
      timestamp,
      instructions: [],
      trade: this.parse_price(parent_instructions),
    }

    parent_instructions.forEach((parent_instruction) =>
        parent_instruction.instructions.forEach((inner_instruction) => {
          entry.instructions.push({
            token_program: inner_instruction.programId,
            authority: inner_instruction.parsed.info.authority,
            destination: inner_instruction.parsed.info.destination,
            mint: inner_instruction.parsed.info.mint,
            source: inner_instruction.parsed.info.source,
            uiAmount: inner_instruction.parsed.info.tokenAmount?.uiAmount ?? 0,
            amount: parseInt(inner_instruction.parsed.info.tokenAmount?.amount),
            decimals: inner_instruction.parsed.info.tokenAmount?.decimals,
          })
        })
    )

    return entry
  }

  private static parse_price(parent_instructions: ParentInstruction[]): Trade {
    const currencies = [
      "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx",
    ]

    let trade: Trade = {cost_price: 0, cost_total: 0, side: 0, size: 0}


    parent_instructions.forEach((p_ins) => {
      trade.cost_total =
          p_ins.instructions.find((ins) =>
              currencies.includes(ins.parsed.info.mint) &&
              ins.parsed.info.tokenAmount.uiAmount > 0
          )?.parsed.info.tokenAmount.uiAmount ?? 0

      trade.size =
          p_ins.instructions.find(
              (ins) => !currencies.includes(ins.parsed.info.mint)
          )?.parsed.info.tokenAmount.uiAmount ?? 0

      trade.side = p_ins.instructions.findIndex((ins) =>
          currencies.includes(ins.parsed.info.mint)
      )

      trade.cost_price = trade.cost_total / trade.size
    })

    return trade
  }
}
