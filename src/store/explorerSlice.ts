import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TxDetails } from '../types';

export interface IExplorerState {
    bridgeTransaction: TxDetails
}

const initialState: IExplorerState = {
    bridgeTransaction: {
        amount: 0,
        age: 0,    // time elapsed since TX start
        txType: 'Transfer',
        bridgeFee: 0,
        bridgeHash: '',
        burnHash: '',
        claimHash: '',
        destinationFee: 0,
        destinationDomain: -1,
        originalDomain: -1,
        originFee: 0,
        sender: '',
        status: 'Pending',
        symbol: 'USDC',
    }
};

export const explorerSlice = createSlice({
    name: 'explorer',
    initialState,
    reducers: {
        setBridgeTransaction(state: IExplorerState, action: PayloadAction<TxDetails>) {
            state.bridgeTransaction = action.payload
        },
        setBridgeTimeElapsedSinceStart(state: IExplorerState, action: PayloadAction<number>){
            state.bridgeTransaction.age = action.payload;
        },
        resetBridgeTransactionData(state: IExplorerState){
            state.bridgeTransaction = initialState.bridgeTransaction;
        }
    },
    extraReducers(builder: any) { }
});

export const {
    resetBridgeTransactionData,
    setBridgeTransaction
} = explorerSlice.actions;

export default explorerSlice.reducer;