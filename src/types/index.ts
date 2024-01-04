export * from './chains';
export * from './consts';
export * from './tokens';

export enum AttestationStatus {
    complete = 'complete',
    pending_confirmations = 'pending_confirmations',
}

export interface Attestation {
    message: string | null
    status: AttestationStatus
}

export interface AttestationResponse {
    attestation: string | null
    status: AttestationStatus
}

export type TTxType =
    "Approve"
    | "Borrow"
    | "Deposit"
    | "Redem"
    | "Swap"
    | "Transfer";

export type TTxStatus =
    "Failed"
    | "Pending"
    | "Success";

export type TxDetails = {
    amount?: number, // number of transferred tokens
    bridgeFee: number,
    bridgeHash: string,
    burnToken?: string, // the address of the transferred token
    mintRecipient?: string, // Receiver address
    destinationFee?: number,
    destinationDomain: number, // Number 0-7, Ethereum == 0, Polygon == 7
    // Additional params
    originalDomain: number,
    originFee: number,
    sender: string,
    burnHash: string,
    start?: Date,
    symbol: string,
    claimHash?: string, // Will arrive when the token is claimed
    finished?: Date
    txType?: TTxType,
    status?: TTxStatus
}