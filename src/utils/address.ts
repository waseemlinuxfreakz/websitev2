import { Hash } from "viem";

export function addressToAccount(address: string): Hash {
    // console.log("addressToAccount:address", address)
    if (!address) return '0x';
    return `0x${address.replace('0x', '')}`;
}

/**
 * Returns zerro-padded bytes32 address representaiton
 * @param address the original 20 byte address
 * @returns a bytes32 zero-padded representaiton of address
 */
export function addressToBytes32(address: string): Hash {
    // console.log("addressToBytes32:address", address)
    // "0x" + 24 zeros + Rest of the address string with leading "0x" trimmed
    return (addressToAccount(
        '000000000000000000000000' +
        address.replace('0x', '')
        )
    )
}

/**
 * Verifies whether a string `data` is an EVM address
 * @param data the verified string
 * @returns true | false
 */
export function isEvmAddress(data: string): boolean {
    if (!data || (data.length !== 42 && data.length !== 40)) return false;
    const regex = /^(0x)?[0-9a-fA-F]{40}$/;
    return regex.test(data);
}

/**
 * Verifies whether a string `data` is an EVM transaction hash
 * @param data the verified string
 * @returns true | false
 */
export function isEvmTransactionHash(data: string): boolean {
    if (!data || (data.length !== 64 && data.length !== 66)) return false;
    const regex = /^(0x)?[0-9a-fA-F]{64}$/;
    return regex.test(data);
}

/**
 * Verifies whether a string `data` is an Emmet.Bridge transaction hash
 * @param data the verified string
 * @returns true | false
 */
export function isBridgeTransaction(data: string): boolean {
    if (!data || (data.length !== 20 && data.length !== 22)) return false;
    const regex = /^(0x)?[0-9a-fA-F]{20}$/;
    return regex.test(data);
}