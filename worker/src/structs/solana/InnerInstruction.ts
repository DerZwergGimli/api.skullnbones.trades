// To parse this data:
//
//   import { Convert, InnerInstruction } from "./file";
//
//   constant innerInstruction = Convert.toInnerInstruction(json);

export interface ParentInstruction {
  index: number
  instructions: Instruction[]
}

export interface Instruction {
  parsed: Parsed
  program: string
  programId: string
}

export interface Parsed {
  info: Info
  type: string
}

export interface Info {
  authority: string
  destination: string
  mint: string
  source: string
  tokenAmount: TokenAmount
}

export interface TokenAmount {
  amount: string
  decimals: number
  uiAmount: number
  uiAmountString: string
}

// Converts JSON strings to/from your types
export class Convert {
  public static toInnerInstruction(json: string): ParentInstruction {
    return JSON.parse(json)
  }
}
