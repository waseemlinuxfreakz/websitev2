import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TTxType, TTxStatus } from '../types'

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
    bridgeHash: '',
    destinationHash: '',
    originHash: '',
    received: 0,
    sent: 0,
    status: 'Pending'

}

export const explorerSlice = createSlice({
    name: 'explorer',
    initialState,
    reducers: {

    },
    extraReducers(builder: any) {}
});