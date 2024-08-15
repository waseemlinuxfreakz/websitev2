import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { BridgeTokens, BridgeFeeStructure } from "../types";
import { TChainType, TokenType } from "./types";
import {
  filterTwoChains,
  filterOneToken,
  filterFromChains,
  filterToChains,
} from "../utils/filters";
import { isStableCoin } from "../verifiers";

export interface IBridgeState {
  allowance: number;
  alltokens: TokenType[];
  amount: number | string;
  balance: number;
  bridgeFee: number;
  deadline: number;
  decimals: number;
  error: string | undefined;
  fromChain: string;
  fromChains: TChainType[];
  fromContractAddress: string;
  fromHash: string;
  fromToken: string;
  fromTokens: TokenType[];
  isApproving: boolean;
  isFailure: boolean;
  isLoading: boolean;
  isReset: boolean;
  isRunning: boolean;
  isSuccess: boolean;
  isTransferProgressVisible: boolean;
  receive: number | string;
  receiver: string;
  slippage: number;
  tempAmount: number | string;
  timeElapsed: number;
  toBalance: number;
  toChain: string;
  toChains: TChainType[];
  toHash: string;
  toToken: string;
  toTokens: TokenType[];
  senderAddress: string;
  isTransferFromLp: boolean;
  tokenFee: number;
}

// FROM
const fromChain = "Sepolia";
const fromToken = "USDC";

// TO
const toChain = "Amoy";
const toToken = fromToken;

const initialState = {
  allowance: 0,
  alltokens: BridgeTokens,
  amount: "",
  balance: 0,
  bridgeFee: 0,
  deadline: 0,
  decimals: 18,
  error: undefined,
  fromChain,
  fromChains: filterFromChains(fromChain, toChain),
  fromContractAddress: "",
  fromHash: "",
  fromToken,
  fromTokens: filterOneToken(fromToken, fromChain, toChain),
  isApproving: false,
  isFailure: false,
  isLoading: false,
  isReset: false,
  isRunning: false,
  isSuccess: false,
  isTransferProgressVisible: false,
  receive: "",
  receiver: "",
  slippage: 0.5,
  tempAmount: "",
  timeElapsed: 0,
  toBalance: 0,
  toChain,
  toChains: filterToChains(fromChain, toChain),
  toHash: "",
  toToken,
  toTokens: filterOneToken(toToken, fromChain, toChain),
  senderAddress: "",
  isTransferFromLp: false,
  tokenFee: 0,
} as IBridgeState;

export const bridgeSlice = createSlice({
  name: "bridge",
  initialState,
  reducers: {
    setBridgeAllowance(state: IBridgeState, action: PayloadAction<number>) {
      state.allowance = action.payload;
    },
    setBridgeAmount(state: IBridgeState, action: PayloadAction<number>) {
      state.amount = action.payload;
      // If we're bridging the same token
      // if (state.fromToken === state.toToken) {
      //   if (action.payload) {
      //     state.receive = action.payload;
      //   } else {
      //     state.receive = "";
      //   }
      // } else {
      //   // If we're swapping while bridging a slippage may occur
      //   const slippageAmount = (state.amount * state.slippage) / 100;
      //   state.receive = state.amount - slippageAmount;
      // }
    },
    setBridgeBalance(state: IBridgeState, action: PayloadAction<number>) {
      state.balance = action.payload;
    },
    setBridgeDeadline(state: IBridgeState, action: PayloadAction<number>) {
      state.deadline = action.payload;
    },
    setBridgeDecimals(
      state: IBridgeState,
      action: PayloadAction<number | bigint>,
    ) {
      if (typeof action.payload === "bigint") {
        state.decimals = parseInt(action.payload.toString());
      } else {
        state.decimals = action.payload;
      }
    },
    setBridgeError(
      state: IBridgeState,
      action: PayloadAction<string | undefined>,
    ) {
      state.error = action.payload;
      state.isFailure = action.payload ? true : false;
    },
    setBridgeFromChain(state: IBridgeState, action: PayloadAction<string>) {
      state.fromChain = action.payload;
      // if (state.fromChain == state.toChain) {
      //   state.toChains.map((c) => {
      //     if (c.name != state.fromChain) {
      //       state.toChain = c.name;
      //     }
      //   });
      // }
      state.fromTokens = filterOneToken(
        state.fromToken,
        state.fromChain,
        state.toChain,
      );
      state.toTokens = filterOneToken(
        state.toToken,
        state.fromChain,
        state.toChain,
      );
      if (
        state.toChains.length &&
        !state.toChains.find((i) => i.name === state.toChain)
      ) {
        state.toChain = state.toChains[0].name;
      }
      state.fromChains = filterFromChains(state.fromChain, state.toChain);
      state.toChains = filterToChains(state.fromChain, state.toChain);
    },
    setFromContractAddress(state: IBridgeState, action: PayloadAction<string>) {
      state.fromContractAddress = action.payload;
    },
    setBridgeFromHash(state: IBridgeState, action: PayloadAction<string>) {
      state.fromHash = action.payload;
    },
    setBridgeFee(state: IBridgeState, action: PayloadAction<number>) {
      state.bridgeFee = action.payload;
    },
    setBridgeFromToken(state: IBridgeState, action: PayloadAction<string>) {
      state.fromToken = action.payload;
      // state.toToken = action.payload;
      state.fromTokens = filterOneToken(
        state.fromToken,
        state.fromChain,
        state.toChain,
      );
      state.toTokens = filterOneToken(
        state.toToken,
        state.fromChain,
        state.toChain,
      );
    },
    setBridgeIsApproving(state: IBridgeState, action: PayloadAction<boolean>) {
      state.isApproving = action.payload;
    },
    setBridgeIsFailure(state: IBridgeState, action: PayloadAction<boolean>) {
      state.isFailure = action.payload;
    },
    setBridgeIsLoading(state: IBridgeState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setBridgeIsReset(state: IBridgeState, action: PayloadAction<boolean>) {
      // Resets the transaction timer to zero
      state.isReset = action.payload;
      if (state.isReset) {
        state.isRunning = false;
      }
    },
    setBridgeIsRunning(state: IBridgeState, action: PayloadAction<boolean>) {
      // Stops the transaction timer
      state.isRunning = action.payload;
      if (state.isRunning) {
        state.isReset = false;
      }
    },
    setBridgeIsSuccess(state: IBridgeState, action: PayloadAction<boolean>) {
      state.isSuccess = action.payload;
    },
    setReceiver: (state: IBridgeState, action: PayloadAction<string>) => {
      state.receiver = action.payload;
    },
    setBridgeSlippage(state: IBridgeState, action: PayloadAction<number>) {
      // If we're bridging the same token
      if (state.fromToken == state.toToken) {
        state.slippage = 0;
        state.receive = state.amount;
      } else {
        // If we're swapping while bridging a slippage may occur
        state.slippage = action.payload;
        const slippageAmount = (Number(state.amount) * state.slippage) / 100;
        state.receive = Number(state.amount) - slippageAmount;
      }
    },
    setBridgeTempAmount(
      state: IBridgeState,
      action: PayloadAction<number | string>,
    ) {
      state.tempAmount = action.payload;
    },
    setBridgeTimeElapsed(state: IBridgeState, action: PayloadAction<number>) {
      state.timeElapsed = action.payload;
    },
    setBridgeToChain(state: IBridgeState, action: PayloadAction<string>) {
      state.toChain = action.payload;
      state.fromChains = filterFromChains(state.fromChain, state.toChain);
      state.toChains = filterToChains(state.fromChain, state.toChain);
      state.fromTokens = filterOneToken(
        state.fromToken,
        state.fromChain,
        state.toChain,
      );
      state.toTokens = filterOneToken(
        state.toToken,
        state.fromChain,
        state.toChain,
      );
    },
    setBridgeToBalance(state: IBridgeState, action: PayloadAction<number>) {
      state.toBalance = action.payload;
    },
    setBridgeToHash(state: IBridgeState, action: PayloadAction<string>) {
      state.toHash = action.payload;
    },
    setBridgeToToken(state: IBridgeState, action: PayloadAction<string>) {
      state.toToken = action.payload;
      // state.fromToken = action.payload;
      // state.fromTokens = filterOneToken(
      //   state.fromToken,
      //   state.fromChain,
      //   state.toChain,
      // );
      state.toTokens = filterOneToken(
        state.toToken,
        state.fromChain,
        state.toChain,
      );
    },
    setSenderAddress(state: IBridgeState, action: PayloadAction<string>) {
      state.senderAddress = action.payload;
    },
    setBridgeTokenFee(state: IBridgeState, action: PayloadAction<number>) {
      state.tokenFee = action.payload;
    },
    setBridgeIsTransferFromLp(
      state: IBridgeState,
      action: PayloadAction<boolean>,
    ) {
      state.isTransferFromLp = action.payload;
    },
    swapBridgeChainsAndTokens(
      state: IBridgeState,
      action: PayloadAction<{
        fromChain: string;
        toChain: string;
        fromToken: string;
        toToken: string;
      }>,
    ) {
      state.fromChain = action.payload.fromChain;
      state.toChain = action.payload.toChain;
      state.fromToken = action.payload.fromToken;
      state.toToken = action.payload.toToken;
      state.fromChains = filterFromChains(
        action.payload.fromChain,
        action.payload.toChain,
      );
      state.toChains = filterToChains(
        action.payload.fromChain,
        action.payload.toChain,
      );
    },
    resetBridgeProgress(state: IBridgeState) {
      state.isTransferProgressVisible = false;
      state.isFailure = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.isRunning = false;
      state.fromHash = "";
      state.toHash = "";
      state.timeElapsed = 0;
      state.isReset = true;
    },
    showBridgeProgress(state: IBridgeState) {
      state.isTransferProgressVisible = true;
      state.isReset = false;
      state.isRunning = true;
      state.isFailure = false;
      state.isSuccess = false;
      state.timeElapsed = 0;
      state.toHash = "";
    },
    setBridgeReceive(state: IBridgeState, action: PayloadAction<number>) {
      state.receive = action.payload;
    },
  },
  extraReducers(builder: any) {},
});

export const {
  setBridgeAllowance,
  setBridgeAmount,
  setBridgeBalance,
  setBridgeDeadline,
  setBridgeDecimals,
  setBridgeError,
  setBridgeFee,
  setBridgeFromChain,
  setBridgeFromHash,
  setBridgeFromToken,
  setBridgeToToken,
  setFromContractAddress,
  setBridgeIsApproving,
  setBridgeIsFailure,
  setBridgeIsLoading,
  setBridgeIsReset,
  setBridgeIsRunning,
  setReceiver,
  setBridgeIsSuccess,
  setBridgeSlippage,
  setBridgeTempAmount,
  setBridgeTimeElapsed,
  setBridgeToChain,
  setBridgeToBalance,
  setBridgeToHash,
  setSenderAddress,
  swapBridgeChainsAndTokens,
  resetBridgeProgress,
  showBridgeProgress,
  setBridgeIsTransferFromLp,
  setBridgeReceive,
  setBridgeTokenFee,
} = bridgeSlice.actions;

export default bridgeSlice.reducer;
