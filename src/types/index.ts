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