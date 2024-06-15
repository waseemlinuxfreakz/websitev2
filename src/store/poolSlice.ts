import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Mock Data
import chainList from "./Chain.json";
import coinsData from "./coins.json";
import { TChainType, TokenType } from "./types";

interface IPoolState {
  chain: string;
  token: string;
  tokens: TokenType[];
}

const chain = chainList[0].name;
const token = coinsData[4].name;

const initialState = {
  chain,
  token,
  tokens: coinsData,
} as IPoolState;

export const poolslice = createSlice({
  name: "pool",
  initialState,
  reducers: {
    setChain(state: IPoolState, action: PayloadAction<string>) {
      state.chain = action.payload;
    },
    setToken: (state: IPoolState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers(builder: any) {},
});

export const { setChain, setToken } = poolslice.actions;

export default poolslice.reducer;
