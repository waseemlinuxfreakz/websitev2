import { TTxStatus } from "./emmetBridge";

export type TExplorerFilter = "NONE" | "SENDER" | "FROMCHAIN" | "TOCHAIN";

export enum SearchDataType {
  Token = "Token",
  EvmAddress = "EvmAddress",
  EvmTransaction = "EvmTransaction",
  BridgeTransaction = "BridgeTransaction",
  None = "None",
}

export const ROWS_PER_PAGE = 10;

export const columns = [
  {
    label: "Txn Type",
    field: "TxnType",
    sort: "asc",
  },
  {
    label: "Txn Hash",
    field: "TxnHash",
    sort: "asc",
  },
  {
    label: "Origin chain",
    field: "Originchain",
    sort: "asc",
  },
  {
    label: "Destination",
    field: "Destination",
    sort: "asc",
  },
  {
    label: "Sent",
    field: "Sent",
    sort: "asc",
  },
  {
    label: "Received",
    field: "Received",
    sort: "asc",
  },
  // {
  //   label: 'Age',
  //   field: 'Age',
  //   sort: 'asc',
  // },
  {
    label: "Txn Status",
    field: "TxnStatus",
    sort: "asc",
  },
];

export type TTxType =
  | "Approve"
  | "Borrow"
  | "Deposit"
  | "Redem"
  | "Swap"
  | "Transfer";

export type TxDetails = {
  age?: number;
  amount?: number; // number of transferred tokens
  bridgeFee: number;
  bridgeHash: string;
  burnToken?: string; // the address of the transferred token
  mintRecipient?: string; // Receiver address
  destinationFee?: number;
  destinationDomain: number; // Number 0-7, Ethereum == 0, Polygon == 7
  // Additional params
  originalDomain: number;
  originFee: number;
  sender: string;
  burnHash: string;
  start?: Date;
  symbol: string;
  claimHash?: string; // Will arrive when the token is claimed
  finished?: Date;
  txType?: TTxType;
  status?: TTxStatus;
};
