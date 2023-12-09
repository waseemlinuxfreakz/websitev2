import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface IBridgeState {
    amount: number,
    deadline: number,
    isSuccess:boolean,
    receive:number,
    slippage: number,
}

const initialState = {
    amount: 0,
    deadline: 0,
    isSuccess:false,
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
        setBridgeIsSuccess(state:IBridgeState, action: PayloadAction<boolean>){
            state.isSuccess = action.payload;
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
    setBridgeIsSuccess,
    setBridgeSlippage
} = bridgeSlice.actions;

export default bridgeSlice.reducer;