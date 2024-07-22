import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Mock Data
import chainList from "./Chain.json";
import coinsData from "./coins.json";
import { TChainType, TokenType } from "./types";

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
}

const chain = chainList[0].name;
const token = coinsData[4].name;

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
} = poolslice.actions;

export default poolslice.reducer;
