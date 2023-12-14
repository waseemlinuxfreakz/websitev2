
/**
 * Returns zerro-padded bytes32 address representaiton
 * @param address the original 20 byte address
 * @returns a bytes32 zero-padded representaiton of address
 */
export function addressToBytes32(address: string) {
    // "0x" + 24 zeros + Rest of the address string with leading "0x" trimmed
    return (
        address.slice(0, 2) +
        '000000000000000000000000' +
        address.slice(2, address.length)
    )
}