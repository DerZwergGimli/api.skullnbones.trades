import { ParentInstruction } from "../solana/InnerInstruction"

export interface DBEntry {
  timestamp: number
  block: number
  signature: string
  instructions: Instruction[]
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

export class Convert {
  public static toDBEntry(
    timestamp: number,
    block: number,
    signature: string,
    parent_instructions: ParentInstruction[]
  ): DBEntry {
    let entry: DBEntry = {
      block,
      signature,
      timestamp,
      instructions: [],
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
}
