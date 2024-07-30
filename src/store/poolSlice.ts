import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Mock Data
import chainList from "./poolChains.json";
import coinsData from "./poolCoins.json";
import { TokenType } from "./types";

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
  pendingRewards: number;
  feeGrowthGlobal: number;
  feeDecimals: number;
}

const chain = chainList[0].name;
const token = coinsData[0].name;

const initialState = {
  chain,
  token,
  tokens: coinsData.filter((_token) => _token.name !== token),
  amount: null,
  apy: 0,
  totalSupply: 0,
  protocolFee: 0,
  protocolFeeAmount: 0,
  tokenFee: 0,
  balance: 0,
  stakedBalance: 0,
  allowance: 0,
  pendingRewards: 0,
  feeGrowthGlobal: 0,
  feeDecimals: 0,
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
      state.tokens = state.tokens.filter(
        (token) => token.name !== action.payload,
      );
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
    setPoolPendingRewards(state: IPoolState, action: PayloadAction<number>) {
      state.pendingRewards = action.payload;
    },
    setPoolFeeGrowthGlobal(state: IPoolState, action: PayloadAction<number>) {
      state.feeGrowthGlobal = action.payload;
    },
    setPoolFeeDecimals(state: IPoolState, action: PayloadAction<number>) {
      state.feeDecimals = action.payload;
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
  setPoolPendingRewards,
  setPoolFeeGrowthGlobal,
  setPoolFeeDecimals,
} = poolslice.actions;

export default poolslice.reducer;
