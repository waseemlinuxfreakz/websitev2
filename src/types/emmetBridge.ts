export const txBackend: string = "https://testnet-tx.emmet.finance/";

export const emailBackend: string =
  "https://emails-backend-cc23168feba6.herokuapp.com";

export const BridgeFeeStructure = {
  stablecoins: {
    percentage: 0,
    minimum: 0,
  },
};

export type TTxStatus = "failed" | "pending" | "reverted" | "success";
