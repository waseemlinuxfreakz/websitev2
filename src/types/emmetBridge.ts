
export const txBackend: string = "https://tx.emmet.finance/";

export const emailBackend: string = "https://emails-backend-cc23168feba6.herokuapp.com";

export const destCircleClaimFee = {
    sepolia:            0.000373724411541901, // ETH
    avalancheFuji:      0.003593025000000000, // AVAX
    optimismSepolia:    0.000282381060608769, // ETH
    arbitrumSepolia:    0.000152201500000000, // ETH
    baseSepolia:        0.000804666739087198, // ETH
    polygonMumbai:      0.030414678249354175, // MATIC
}

export const originCircleBurnFee = {
    sepolia:            0.004128722230000000, // ETH
    avalancheFuji:      0.010000000000000000, // AVAX
    optimismSepolia:    0.000200000000000000, // ETH
    arbitrumSepolia:    0.000300000000000000, // ETH
    baseSepolia:        0.000500000000000000, // ETH
    polygonMumbai:      0.000320000000000000, // MATIC
}

export type TCircleClaimFeeChainName = keyof typeof destCircleClaimFee;


export const BridgeFeeStructure = {
    stablecoins: {
        percentage: 0.0002,
        minimum: 0.4
    }
}

export type TTxStatus =
    "failed"
    | "pending" | "Pending"
    | "reverted"
    | "success" | "Success";