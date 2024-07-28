import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Mock Data
import chainList from "./Chain.json";
import coinsData from "./coins.json";
import { TChainType, TokenType } from "./types";
import { BridgeFeeStructure } from "../types";
import { isStableCoin } from "../verifiers";

interface IPoolState {
  chain: string;
  token: string;
  tokens: TokenType[];
  amount: number | null;
  apy: number;
  totalSupply: number;
  protocolFee: number;
  protocolFeeAmount: number;
  tokenFee: number;
  balance: number;
  stakedBalance: number;
  allowance: number;
}

const chain = "Sepolia";
const token = "USDC";

const initialState = {
  chain,
  token,
  tokens: coinsData,
  amount: null,
  apy: 0.25,
  totalSupply: 0,
  protocolFee: 0,
  protocolFeeAmount: 0,
  tokenFee: 0,
  balance: 0,
  stakedBalance: 0,
  allowance: 0,
} as IPoolState;

export const poolslice = createSlice({
  name: "pool",
  initialState,
  reducers: {
    setPoolChain(state: IPoolState, action: PayloadAction<string>) {
      state.chain = action.payload;
    },
    setPoolToken: (state: IPoolState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setPoolAmount: (state: IPoolState, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    setPoolApy: (state: IPoolState, action: PayloadAction<number>) => {
      state.apy = action.payload;
    },
    setPoolTotalSupply: (state: IPoolState, action: PayloadAction<number>) => {
      state.totalSupply = action.payload;
    },
    setPoolProtocolFee: (state: IPoolState, action: PayloadAction<number>) => {
      state.protocolFee = action.payload;
    },
    setPoolProtocolFeeAmount: (
      state: IPoolState,
      action: PayloadAction<number>,
    ) => {
      state.protocolFeeAmount = action.payload;
    },
    setPoolTokenFee: (state: IPoolState, action: PayloadAction<number>) => {
      state.tokenFee = action.payload;
    },
    setPoolBalance: (state: IPoolState, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    setPoolStakedBalance: (
      state: IPoolState,
      action: PayloadAction<number>,
    ) => {
      state.stakedBalance = action.payload;
    },
    setPoolAllowance(state: IPoolState, action: PayloadAction<number>) {
      state.allowance = action.payload;
    },
  },
  extraReducers(builder: any) {},
});

export const {
  setPoolChain,
  setPoolAmount,
  setPoolToken,
  setPoolApy,
  setPoolProtocolFee,
  setPoolProtocolFeeAmount,
  setPoolTokenFee,
  setPoolTotalSupply,
  setPoolBalance,
  setPoolStakedBalance,
  setPoolAllowance,
} = poolslice.actions;

export default poolslice.reducer;
