import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { BridgeTokens } from '../types'
import { TChainType, TokenType } from './types';
import {filterTwoChains, filterOneToken} from '../utils/filters';

export interface IBridgeState {
    allowance: number,
    alltokens:TokenType[],
    amount: number | string,
    balance: number,
    bridgeFee: number,
    deadline: number,
    decimals: number | bigint,
    error: string | undefined,
    fromChain: string,
    fromChains: TChainType[],
    fromContractAddress: string,
    fromToken: string,
    fromTokens: TokenType[],
    isFailure: boolean,
    isSuccess: boolean,
    receive: number | string,
    receiver: string,
    slippage: number,
    toBalance: number,
    toChain: string,
    toChains: TChainType[],
    toToken: string,
    toTokens: TokenType[],
}

// FROM
const fromChain = 'Ethereum';
const fromToken = 'USDC';

// TO
const toChain = 'Avalanche';
const toToken = fromToken;

const initialState = {
    allowance: 0,
    alltokens:BridgeTokens,
    amount: '',
    balance: 0,
    bridgeFee: 0,
    deadline: 0,
    decimals: 18,
    error: undefined,
    fromChain,
    fromChains: filterTwoChains(fromChain, toChain),
    fromContractAddress: '',
    fromToken,
    fromTokens: filterOneToken(fromToken),
    isFailure: false,
    isSuccess: false,
    receive: '',
    receiver: "",
    slippage: 0.5,
    toBalance: 0,
    toChain,
    toChains: filterTwoChains(fromChain, toChain),
    toToken,
    toTokens: filterOneToken(toToken),
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
        setBridgeBalance(state: IBridgeState, action: PayloadAction<number>){
            state.balance = action.payload;
        },
        setBridgeDeadline(state: IBridgeState, action: PayloadAction<number>) {
            state.deadline = action.payload;
        },
        setBridgeDecimals(state:IBridgeState, action:PayloadAction<number|bigint>){
            state.decimals = action.payload;
        },
        setBridgeError(state: IBridgeState, action: PayloadAction<string | undefined>){
            state.error = action.payload;
            state.isFailure = action.payload ? true : false;
        },
        setBridgeFromChain(state: IBridgeState, action: PayloadAction<string>) {
            state.fromChain = action.payload;
            state.fromChains = filterTwoChains(state.fromChain, state.toChain);
            state.toChains = filterTwoChains(state.fromChain, state.toChain);
        },
        setFromContractAddress(state: IBridgeState, action: PayloadAction<string>) {
            state.fromContractAddress = action.payload;
        },
        setBridgeFee(state:IBridgeState, action:PayloadAction<number>){
            state.bridgeFee = action.payload;
        },
        setBridgeFromToken(state: IBridgeState, action:PayloadAction<string>){
            state.fromToken = action.payload;
            state.toToken = action.payload;
            state.fromTokens = filterOneToken(state.fromToken);
            state.toTokens = filterOneToken(state.toToken);
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
            const slippageAmount = Number(state.amount) * state.slippage / 100;
            state.receive = Number(state.amount) - slippageAmount;
        },
        setBridgeToChain(state: IBridgeState, action: PayloadAction<string>) {
            state.toChain = action.payload;
            state.fromChains = filterTwoChains(state.fromChain, state.toChain);
            state.toChains = filterTwoChains(state.fromChain, state.toChain);
        },
        setBridgeToBalance(state: IBridgeState, action: PayloadAction<number>){
            state.toBalance = action.payload;
        },
        setBridgeToToken(state: IBridgeState, action:PayloadAction<string>){
            state.toToken = action.payload;
            state.fromToken = action.payload;
            state.fromTokens = filterOneToken(state.fromToken);
            state.toTokens = filterOneToken(state.toToken);
        },
        swapBridgeChainsAndTokens(state:IBridgeState){
            const fromChain = state.fromChain;
            const toChain = state.toChain;
            const fromToken = state.fromToken;
            const toToken = state.toToken;
            state.fromChain = toChain;
            state.toChain = fromChain;
            state.fromToken = toToken;
            state.toToken = fromToken;
            state.fromChains = filterTwoChains(state.fromChain, state.toChain);
            state.toChains = filterTwoChains(state.fromChain, state.toChain);
        }
    },
    extraReducers(builder: any) {

    }
});

export const {
    setBridgeAllowance,
    setBridgeAmount,
    setBridgeBalance,
    setBridgeDeadline,
    setBridgeDecimals,
    setBridgeError,
    setBridgeFee,
    setBridgeFromChain,
    setBridgeFromToken,
    setBridgeToToken,
    setFromContractAddress,
    setBridgeIsFailure,
    setReceiver,
    setBridgeIsSuccess,
    setBridgeSlippage,
    setBridgeToChain,
    setBridgeToBalance,
    swapBridgeChainsAndTokens,
} = bridgeSlice.actions;

export default bridgeSlice.reducer;