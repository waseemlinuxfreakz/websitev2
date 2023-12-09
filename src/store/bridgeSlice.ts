import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface IBridgeState {
    amount: number,
    deadline: number,
    receive:number,
    slippage: number,
}

const initialState = {
    amount: 0,
    deadline: 0,
    receive: 0,
    slippage: 0.5
} as IBridgeState;

export const bridgeSlice = createSlice({
    name: 'bridge',
    initialState,
    reducers: {
        setBridgeAmount(state: IBridgeState, action: PayloadAction<number>){
            state.amount = action.payload;
            const slippageAmount = state.amount * state.slippage / 100;
            state.receive = state.amount - slippageAmount;
        },
        setBridgeDeadline(state: IBridgeState, action: PayloadAction<number>){
            state.deadline = action.payload;
        },
        setBridgeSlippage(state: IBridgeState, action: PayloadAction<number>){
            state.slippage = action.payload;
            const slippageAmount = state.amount * state.slippage / 100;
            state.receive = state.amount - slippageAmount;
        }
    },
    extraReducers(builder: any) {

    }
});

export const {
    setBridgeAmount,
    setBridgeDeadline,
    setBridgeSlippage
} = bridgeSlice.actions;

export default bridgeSlice.reducer;