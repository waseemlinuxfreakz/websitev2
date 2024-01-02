import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TTxType, TTxStatus } from '../types';

export interface IExplorerState {
    age: number,    // time elapsed since TX start
    txType: TTxType,
    bridgeHash: string,
    destinationHash: string,
    originHash:string,
    received: number,
    sent: number,
    status: TTxStatus
}

const initialState = {
    age: 0,    // time elapsed since TX start
    txType: 'Transfer',
    bridgeHash: '659158587e0bb50da4538d32',
    destinationHash: '',
    originHash: '',
    received: 0,
    sent: 0,
    status: 'Pending'

} as IExplorerState;

export const explorerSlice = createSlice({
    name: 'explorer',
    initialState,
    reducers: {
        setExplorerBridgeAge(state: IExplorerState, action: PayloadAction<Date>){
            const start: Date = action.payload;
            // state.age = 
        },
        setExplorerBridgeTxType(state: IExplorerState, action: PayloadAction<TTxType>){
            state.txType = action.payload;
        },
        setExplorerBridgeHash(state: IExplorerState, action: PayloadAction<string>){
            state.bridgeHash = action.payload;
        },
        setExplorerBridgeDestinationHash(state: IExplorerState, action: PayloadAction<string>){
            state.destinationHash = action.payload;
        },
        setExplorerBridgeOriginHash(state: IExplorerState, action: PayloadAction<string>){
            state.originHash = action.payload;
        },
        setExplorerBridgeReceived(state: IExplorerState, action: PayloadAction<number>){
            state.received = action.payload;
        },
        setExplorerBridgeSent(state: IExplorerState, action: PayloadAction<number>){
            state.sent = action.payload;
        },
        setExplorerBridgeStatus(state: IExplorerState, action: PayloadAction<TTxStatus>){
            state.status = action.payload;
        }
    },
    extraReducers(builder: any) {}
});

export const {
    setExplorerBridgeAge,
    setExplorerBridgeTxType,
    setExplorerBridgeHash,
    setExplorerBridgeDestinationHash,
    setExplorerBridgeReceived,
    setExplorerBridgeSent,
    setExplorerBridgeStatus,
} = explorerSlice.actions;

export default explorerSlice.reducer;