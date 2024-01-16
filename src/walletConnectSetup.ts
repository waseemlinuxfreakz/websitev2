// import { Web3Modal } from '@web3modal/react';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
// import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
// import { ALL_CHAINS } from './constants/chains/index';
// import { QueryClient } from '@tanstack/query-core';
// import { Config } from '@wagmi/core';
// import { P, W } from '@wagmi/core/dist/index-e744bbc2';
// import { FallbackTransport } from 'viem';

// // Singleton
// let walletConnectInstance: { 
//     projectId: string; 
//     ethereumClient: EthereumClient; 
//     wagmiConfig: Config<P<FallbackTransport>, W> & { queryClient: QueryClient; }; 
// } | null = null;

// /**
//  * Returns the WalletConnect instance
//  * @returns WalletConnect instance
//  */
// function getWalletConnectInstance() {
//     if (!walletConnectInstance) {
//         console.log("new WC Instance")
//         // Perform the setup only if the instance doesn't exist
//         const supportedChains = ALL_CHAINS;
//         const projectId = "0792a282f1d5c406794a1cbec7d7f4b4";
//         const { publicClient } = configureChains(supportedChains, [w3mProvider({ projectId })]);
//         const wagmiConfig = createConfig({
//             autoConnect: true,
//             connectors: w3mConnectors({ projectId, chains: supportedChains }),
//             publicClient
//         });

//         const ethereumClient = new EthereumClient(wagmiConfig, supportedChains);

//         // Create and store the WalletConnect instance
//         walletConnectInstance = { projectId, ethereumClient, wagmiConfig };
//         return walletConnectInstance;
//     } else {
//         console.log("Old WC instance");
//         return walletConnectInstance;
//     }

    
// }

// export { getWalletConnectInstance };