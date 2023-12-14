
export function bnWithoutDecimals(
    bn: bigint | number | string,
    decimals: bigint | number | string
): string {
    const bn_ = BigInt(bn);
    const dec_ = BigInt(decimals);
    const result: bigint = bn_ / 10n ** dec_;
    return result.toLocaleString();
}