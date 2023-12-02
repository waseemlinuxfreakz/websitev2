import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
// Mock Data
import coinsData from './coins.json';

type SupportedToken = {
    cmc_id: number,
    name: string,
    icon: string,
    price: number
}

enum CMCSupportedTokenSymbol {
    DAI = "DAI",
    // EMMET = "EMMET", // Yet unsupported
    ETH = "ETH",
    OP = "OP",
    SCRL = "SCRL",
    USDC = "USDC",
    USDT = "USDT",
}

async function extractPrice(name: string): Promise<any> {

    // const foundItem = coinsData.find(item => item.name === name);
    // return foundItem ? foundItem.price : 0;
    const apiURL = "https://fee-oracle-3efdd870fbf2.herokuapp.com/?name=";
    try {
        const response = await fetch(`${apiURL}${name}`);
        if (response) {
            const data = await response.json();
            if (data && data.price) {
                return Number(data.price);
            } else {
                return 0;
            }

        }
    } catch (error) {
        console.error(error);
        return 0;
    }
}

export const setFromPrice = createAsyncThunk('swap/setFromPrice',
    async (name: string) => {
        return await extractPrice(name);
    });

export const setToPrice = createAsyncThunk('swap/setToPrice',
    async (name: string) => {
        return await extractPrice(name);
    });

export type TokenType = {
    icon: string,
    name: string,
    price: number,
}

interface SwapState {
    fromToken: string,
    toToken: string,
    fromPrice: number,
    toPrice: number,
    tokens: TokenType[]
}

let fromPrice = 0;
let toPrice = 0;

(async () => {
    // Initiate the first time
    fromPrice = await extractPrice(coinsData[0].name);
    toPrice = await extractPrice(coinsData[coinsData.length - 1].name);
})().catch(e => console.error(e));

const initialState = {
    fromToken: coinsData[0].name,
    toToken: coinsData[coinsData.length - 1].name,
    fromPrice,
    toPrice,
    tokens: coinsData
} as SwapState;

export const swapslice = createSlice({
    name: 'swap',
    initialState,
    reducers: {
        setFromToken: (state, action: PayloadAction<string>) => {
            state.fromToken = action.payload;
            setFromPrice(action.payload);
        },
        setToToken: (state, action: PayloadAction<string>) => {
            state.toToken = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(setFromPrice.fulfilled, (state, action) => {
            state.fromPrice = action.payload;
        })
        builder.addCase(setToPrice.fulfilled, (state, action) => {
            state.toPrice = action.payload;
        })
    },
});

export const {
    setFromToken,
    setToToken,
} = swapslice.actions;

export const selectSwap = (state: RootState) => state.swap;

export default swapslice.reducer;