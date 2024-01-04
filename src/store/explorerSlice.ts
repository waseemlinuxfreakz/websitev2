import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TTxType, TTxStatus, TxDetails } from '../types';

export interface IExplorerState {
    bridgeTransaction: TxDetails
}

const initialState = {
    bridgeTransaction: {
        age: 0,    // time elapsed since TX start
        txType: 'Transfer',
        bridgeFee: 0,
        bridgeHash: '0x659158587e0bb50da4538d32',
        burnHash: '',
        destinationFee: 0,
        destinationDomain: -1,
        destinationHash: '',
        originalDomain: -1,
        originHash: '',
        originFee: 0,
        received: 0,
        sender: '',
        sent: 0,
        status: 'Pending',
        symbol: 'USDC',
    }
} as IExplorerState;

export const explorerSlice = createSlice({
    name: 'explorer',
    initialState,
    reducers: {
        setBridgeTransaction(state: IExplorerState, action: PayloadAction<TxDetails>) {
            state.bridgeTransaction = action.payload
        }
    },
    extraReducers(builder: any) { }
});

export const {
    setBridgeTransaction
} = explorerSlice.actions;

export default explorerSlice.reducer;