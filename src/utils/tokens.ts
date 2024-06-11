import { TOKEN_DECIMALS } from "../types";

/**
 * Verifies whether the `data` is a supported token name
 * @param data potential token name
 * @returns true | false
 */
export function isTokenName(data: string): boolean {
  return Object.keys(TOKEN_DECIMALS).indexOf(data) > -1;
}
