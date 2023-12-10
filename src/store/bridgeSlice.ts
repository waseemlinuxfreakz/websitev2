import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
// Mock Data
import chainList from './Chain.json';
import coinsData from './coins.json';
import { TChainType, TokenType } from './types';
import {filterTwoChains, filterTwoTokens} from '../utils/filters';

export interface IBridgeState {
    allowance: number,
    alltokens:TokenType[],
    amount: number,
    bridgeFee: number,
    deadline: number,
    fromChain: string,
    fromChains: TChainType[],
    fromContractAddress: string,
    fromToken: string,
    fromTokens: TokenType[],
    isFailure: boolean,
    isSuccess: boolean,
    receive: number,
    receiver: string,
    slippage: number,
    toChain: string,
    toChains: TChainType[],
    toToken: string,
    toTokens: TokenType[],
}

// FROM
const fromChain = chainList[0].name;
const fromToken = coinsData[0].name;

// TO
const toChain = chainList[chainList.length - 1].name;
const toToken = coinsData[coinsData.length - 1].name;

const initialState = {
    allowance: 0,
    alltokens:coinsData,
    amount: 0,
    bridgeFee: 0,
    deadline: 0,
    fromChain,
    fromChains: filterTwoChains(fromChain, toChain),
    fromContractAddress: '',
    fromToken,
    fromTokens: filterTwoTokens(fromToken, toToken),
    isFailure: false,
    isSuccess: false,
    receive: 0,
    receiver: "",
    slippage: 0.5,
    toChain,
    toChains: filterTwoChains(fromChain, toChain),
    toToken,
    toTokens: filterTwoTokens(fromToken, toToken),
} as IBridgeState;

export const bridgeSlice = createSlice({
    name: 'bridge',
    initialState,
    reducers: {
        setBridgeAllowance(state: IBridgeState, action: PayloadAction<number>) {
            state.allowance = action.payload;
        },
        setBridgeAmount(state: IBridgeState, action: PayloadAction<number>) {
            state.amount = action.payload;
            const slippageAmount = state.amount * state.slippage / 100;
            state.receive = state.amount - slippageAmount;
        },
        setBridgeDeadline(state: IBridgeState, action: PayloadAction<number>) {
            state.deadline = action.payload;
        },
        setBridgeFromChain(state: IBridgeState, action: PayloadAction<string>) {
            state.fromChain = action.payload;
            state.fromChains = filterTwoChains(state.fromChain, state.toChain);
            state.toChains = filterTwoChains(state.fromChain, state.toChain);
        },
        setFromContractAddress(state: IBridgeState, action: PayloadAction<string>) {
            state.fromContractAddress = action.payload;
        },
        setBridgeFromToken(state: IBridgeState, action:PayloadAction<string>){
            state.fromToken = action.payload;
            state.fromTokens = filterTwoTokens(state.fromToken, state.toToken);
            state.toTokens = filterTwoTokens(state.fromToken, state.toToken);
        },
        setBridgeIsFailure(state: IBridgeState, action: PayloadAction<boolean>) {
            state.isFailure = action.payload;
        },
        setBridgeIsSuccess(state: IBridgeState, action: PayloadAction<boolean>) {
            state.isSuccess = action.payload;
        },
        setReceiver: (state: IBridgeState, action: PayloadAction<string>) => {
            state.receiver = action.payload;
        },
        setBridgeSlippage(state: IBridgeState, action: PayloadAction<number>) {
            state.slippage = action.payload;
            const slippageAmount = state.amount * state.slippage / 100;
            state.receive = state.amount - slippageAmount;
        },
        setBridgeToChain(state: IBridgeState, action: PayloadAction<string>) {
            state.toChain = action.payload;
            state.fromChains = filterTwoChains(state.fromChain, state.toChain);
            state.toChains = filterTwoChains(state.fromChain, state.toChain);
        },
        setBridgeToToken(state: IBridgeState, action:PayloadAction<string>){
            state.toToken = action.payload;
            state.fromTokens = filterTwoTokens(state.fromToken, state.toToken);
            state.toTokens = filterTwoTokens(state.fromToken, state.toToken);
        }
    },
    extraReducers(builder: any) {

    }
});

export const {
    setBridgeAllowance,
    setBridgeAmount,
    setBridgeDeadline,
    setBridgeFromChain,
    setBridgeFromToken,
    setBridgeToToken,
    setFromContractAddress,
    setBridgeIsFailure,
    setReceiver,
    setBridgeIsSuccess,
    setBridgeSlippage,
    setBridgeToChain,
} = bridgeSlice.actions;

export default bridgeSlice.reducer;