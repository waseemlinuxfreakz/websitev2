import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
// Mock Data
import coinsData from './coins.json';

function extractPrice(name:string) {
    const foundItem = coinsData.find(item => item.name === name);
    return foundItem ? foundItem.price : 0;
}

export type TokenType = {
    icon:string,
    name:string,
    price: number,
}

interface SwapState {
    fromToken:string,
    toToken:string,
    fromPrice:number,
    toPrice:number,
    tokens: TokenType[]
}

const initialState = {
    fromToken:coinsData[0].name,
    toToken:coinsData[coinsData.length-1].name,
    fromPrice:extractPrice(coinsData[0].name),
    toPrice:extractPrice(coinsData[coinsData.length-1].name),
    tokens: coinsData
} as SwapState;

export const swapslice = createSlice({
    name: 'swap',
    initialState,
    reducers: {
        setFromToken: (state, action: PayloadAction<string>) => {
            state.fromToken = action.payload;
            state.fromPrice = extractPrice(action.payload);
        },
        setToToken: (state, action: PayloadAction<string>) => {
            state.toToken = action.payload;
            state.toPrice = extractPrice(action.payload);
        },
    }
});

export const {
    setFromToken,
    setToToken,
} = swapslice.actions;

export const selectSwap = (state: RootState) => state.swap;

export default swapslice.reducer;