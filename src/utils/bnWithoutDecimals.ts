
export function bnWithoutDecimals(
    bn: number | string,
    decimals: number | string
): string {
    const bn_ = Number(bn);
    const dec_ = Number(decimals);
    const result: number = bn_ / 10 ** dec_;
    return result.toLocaleString();
}