import { TOKEN_DECIMALS, TTokenName } from "../types";

export function bnWithoutDecimals(
  bn: number | string,
  tokenName: TTokenName,
): string {
  const bn_ = Number(bn);
  const dec_ = TOKEN_DECIMALS[tokenName];
  const result: number = bn_ / 10 ** dec_;
  return result.toLocaleString();
}
