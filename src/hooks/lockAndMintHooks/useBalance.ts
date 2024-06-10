import { ChainFactory } from "emmet.js/dist/factory/types";
import { LockAndMintSupportedChainIDs } from "./chains";

export const useNativeCoinBalance = async (
  address: string,
  chainId: LockAndMintSupportedChainIDs,
  factory: ChainFactory,
) => {
  const handler = await factory.inner(chainId);
  return handler.balance(address);
};

export const useTokenBalance = async (
  address: string,
  token: string,
  chainId: LockAndMintSupportedChainIDs,
  factory: ChainFactory,
) => {
  const handler = await factory.inner(chainId);
  return handler.tokenBalance(token, address);
};
