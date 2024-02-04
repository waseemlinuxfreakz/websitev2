export * from './chains';
export * from './consts';
export * from './emmetBridge';
export * from './explorer';
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