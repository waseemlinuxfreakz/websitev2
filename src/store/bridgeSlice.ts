import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface IBridgeState {
    deadline: number,
    slippage: number,
}

const initialState = {
    deadline: 0,
    slippage: 0.5
} as IBridgeState;

export const bridgeSlice = createSlice({
    name: 'bridge',
    initialState,
    reducers: {
        setBridgeDeadline(state: IBridgeState, action: PayloadAction<number>){
            state.deadline = action.payload;
        },
        setBridgeSlippage(state: IBridgeState, action: PayloadAction<number>){
            state.slippage = action.payload;
        },
    },
    extraReducers(builder: any) {

    }
});

export const {
    setBridgeDeadline,
    setBridgeSlippage
} = bridgeSlice.actions;

export default bridgeSlice.reducer;