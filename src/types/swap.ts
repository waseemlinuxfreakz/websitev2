/**
 * @dev Uniswap V3 default factory enabled fee amounts.
 * In hundredths of bips, i.e. 1e-6, type uint24 (0, 16,777,215).
 * @param LOWEST - 0.01%, or 0.00000100 in real number representation
 * @param LOW    - 0.05%, or 0.00000500 in real number representation
 * @param MEDIUM - 0.30%, or 0.00003000 in real number representation
 * @param HIGH   - 1.00%, or 0.00010000 in real number representation
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000,
}

export type TLPToken = {
  ethereum: string;
};

export const SwapTokens: { [key: string]: TLPToken } = {
  USDC: {
    ethereum: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  },
  WETH: {
    ethereum: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  },
};

export type TSupportedToken = {
  [key: string]: {
    [key: string]: {
      pool: string;
      token0: string;
      token1: string;
    };
  };
};

export const supportedSwapTokens: TSupportedToken = {
  ethereum: {
    "USDC-ETH": {
      pool: "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640",
      token0: SwapTokens.USDC.ethereum,
      token1: SwapTokens.WETH.ethereum,
    },
  },
};
