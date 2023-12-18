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