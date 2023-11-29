import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface SwapState {
    fromToken:string,
    toToken:string,
    fromPrice:number,
    toPrice:number,
}

const initialState = {
    fromToken:"ETH",
    toToken:"USDT",
    fromPrice:0,
    toPrice:0,
} as SwapState;

export const swapslice = createSlice({
    name: 'swap',
    initialState,
    reducers: {
        setFromToken: (state, action: PayloadAction<string>) => {
            state.fromToken = action.payload
        },
        setToToken: (state, action: PayloadAction<string>) => {
            state.fromToken = action.payload
        },
        setFromPrice: (state, action: PayloadAction<number>) => {
            state.fromPrice = action.payload
        },
        setToPrice: (state, action: PayloadAction<number>) => {
            state.toPrice = action.payload
        },
    }
});

export const {
    setFromToken,
    setToToken,
    setFromPrice,
    setToPrice,
} = swapslice.actions;

export const selectSwap = (state: RootState) => state.swap;

export default swapslice.reducer;