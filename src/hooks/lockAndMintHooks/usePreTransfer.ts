// import { ChainFactory } from "emmet.js/dist/factory/types";
// import { LockAndMintSupportedChainIDs } from "./chains";
// import {
//   CalculateCoinFees,
//   CalculateDestinationTransactionFees,
//   ChainName,
//   GetApprovedTokenAmount,
//   GetBalance,
//   GetCoinPrice,
//   GetProvider,
//   GetTokenBalance,
//   NativeCoinName,
//   PreTransfer,
//   SendInstallment,
//   ValidateAddress,
// } from "emmet.js";
// import { Web3Helper } from "emmet.js/dist/chains/web3";
// import { TonGasArgs, TonHelper } from "emmet.js/dist/chains/ton";
// import { Sender } from "@ton/core";
// import { TonClient } from "@ton/ton";

// export const useGetApprovedAmount = async (
//   token: string,
//   owner: string,
//   chainId: LockAndMintSupportedChainIDs,
//   factory: ChainFactory
// ) => {
//   const helper = await factory.inner(chainId);
//   if (isGetApprovedAmount(helper)) {
//     const approvedAmount = await helper.getApprovedAmount(token, owner);
//     return approvedAmount;
//   }
//   return undefined;
// };

// export function isGetApprovedAmount(
//   helper: any
// ): helper is GetApprovedTokenAmount {
//   return "getApprovedAmount" in helper;
// }

// export async function useApproveAmount<Signer>(
//   signer: Signer,
//   token: string,
//   owner: string,
//   chainId: LockAndMintSupportedChainIDs,
//   factory: ChainFactory,
//   amount: bigint
// ) {
//   const helper = await factory.inner(chainId);
//   if (isPreTransferChain(helper)) {
//     const approvedAmount = await helper.preTransfer(
//       signer,
//       token,
//       owner,
//       undefined
//     );
//     return approvedAmount;
//   }
//   return undefined;
// }

// export function isPreTransferChain<Chain, Sender, GasArgs>(
//   helper: any
// ): helper is PreTransfer<Sender, GasArgs> {
//   return "getApprovedAmount" in helper;
// }
// export type InferSignerChain<Chain> =
