import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TxDetails, SearchDataType } from '../types';

export interface IExplorerState {
    bridgeTransaction: TxDetails,
    filter: string,
    filterType: SearchDataType,
    tableData: TxDetails[],
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
        status: 'pending',
        symbol: 'USDC',
    },
    filter: '',
    filterType: SearchDataType.None,
    tableData: []
};

export const explorerSlice = createSlice({
    name: 'explorer',
    initialState,
    reducers: {
        setSearchFilter(state:IExplorerState, action:PayloadAction<string>){
            state.filter = action.payload;
        },
        setSearchFilterType(state: IExplorerState, action:PayloadAction<SearchDataType>){
            state.filterType = action.payload;
        },
        setBridgeTransaction(state: IExplorerState, action: PayloadAction<TxDetails>) {
            state.bridgeTransaction = action.payload
        },
        setBridgeTimeElapsedSinceStart(state: IExplorerState, action: PayloadAction<number>){
            state.bridgeTransaction.age = action.payload;
        },
        resetBridgeTransactionData(state: IExplorerState){
            state.bridgeTransaction = initialState.bridgeTransaction;
        },
        setTableData(state:IExplorerState, action:PayloadAction<TxDetails[]>){
            state.tableData = action.payload;
        },
    },
    extraReducers(builder: any) { }
});

export const {
    setSearchFilter,
    setSearchFilterType,
    resetBridgeTransactionData,
    setBridgeTransaction,
    setTableData,
} = explorerSlice.actions;

export default explorerSlice.reducer;