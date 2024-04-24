export const txBackend: string = "https://testnet-tx.emmet.finance/";

export const emailBackend: string =
  "https://emails-backend-cc23168feba6.herokuapp.com";

export const destCircleClaimFee = {
  sepolia: 0.000373724411541901, // ETH
  avalancheFuji: 0.003593025, // AVAX
  optimismSepolia: 0.000282381060608769, // ETH
  arbitrumSepolia: 0.0001522015, // ETH
  baseSepolia: 0.000804666739087198, // ETH
  polygonMumbai: 0.030414678249354175, // MATIC
};

export const originCircleBurnFee = {
  sepolia: 0.00412872223, // ETH
  avalancheFuji: 0.01, // AVAX
  optimismSepolia: 0.0002, // ETH
  arbitrumSepolia: 0.0003, // ETH
  baseSepolia: 0.0005, // ETH
  polygonMumbai: 0.00032, // MATIC
};

export type TCircleClaimFeeChainName = keyof typeof destCircleClaimFee;

export const BridgeFeeStructure = {
  stablecoins: {
    percentage: 0.0002,
    minimum: 0.05,
  },
};

export type TTxStatus =
  | "failed"
  | "pending"
  | "Pending"
  | "reverted"
  | "success"
  | "Success";
