import { SearchDataType } from "../types";
import {
  isBridgeTransaction,
  isEvmAddress,
  isEvmTransactionHash,
} from "./address";
import { isTokenName } from "./tokens";

export function getSearchDataType(data: string): SearchDataType {
  switch (true) {
    case isTokenName(data):
      return SearchDataType.Token;
    case isEvmAddress(data):
      return SearchDataType.EvmAddress;
    case isEvmTransactionHash(data):
      return SearchDataType.EvmTransaction;
    case isBridgeTransaction(data):
      return SearchDataType.BridgeTransaction;
    default:
      return SearchDataType.None;
  }
}
