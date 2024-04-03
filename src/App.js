import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

// Page imports
import WebHome from './Pages/WebPages/WebHome';
import PrivacyPolicy from './Pages/WebPages/PrivacyPolicy';
import TermsService from './Pages/WebPages/TermsService';
import Tokenomics from './Pages/WebPages/Tokenomics';
import Bridge from './Pages/Bridge';
import ExplorerPage from './Pages/Explorer';
import TransactionDetailsPage from './Pages/TransactionDetailsPage';
// Uncommented upcoming pages
// import HomePage from './Pages/Home';
// import PoolPage from './Pages/Pool';
// import YourLiquidityPage from './Pages/YourLiquidityPage';

// Web3Modal and Wagmi imports
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { ALL_CHAINS } from './types/chains';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Responsive.css';

const supportedChains = ALL_CHAINS;
const gaTrackingId = 'G-C8Z7ZSWB1L'; // Replace with your Tracking ID
const projectId = "2bcf20e00bc0f72513e22cd16ce9ae83";

const { publicClient } = configureChains(supportedChains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains: supportedChains }),
  publicClient,
  featuredWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // Metamask
    '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709', // OKX
  ]
});

const ethereumClient = new EthereumClient(wagmiConfig, supportedChains);

// Analytics tracking hook
function useAnalytics() {
  let location = useLocation();
  useEffect(() => {
    ReactGA.initialize(gaTrackingId);
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

function App() {
  useAnalytics();

  return (
    <WagmiConfig config={wagmiConfig}>
      <Router>
        <Routes>
          <Route path="/" element={<WebHome />} />
          <Route path="/tokensale" element={<Tokenomics />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsService />} />
          <Route path="/bridge" element={<Bridge />} />
          <Route path="/explorer" element={<ExplorerPage />} />
          <Route path="/transactionDetails/:hash" element={<TransactionDetailsPage />} />
          {/* Uncommented and added the routes for upcoming pages */}
          {/* <Route path="/swap" element={<HomePage />} /> */}
          {/* <Route path="/pool" element={<PoolPage />} /> */}
          {/* <Route path="/pool/your-liquidity" element={<YourLiquidityPage />} /> */}
        </Routes>
      </Router>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
      />
    </WagmiConfig>
  );
}

export default App;



// function WalletConnectWrapper({ children }) {

//   const walletConnectInstance = getWalletConnectInstance();

//   return (
//     <>
//       <WagmiConfig config={walletConnectInstance.wagmiConfig}>
//         {children}
//       </WagmiConfig>
//       <Web3Modal
//         projectId={walletConnectInstance.projectId}
//         ethereumClient={walletConnectInstance.ethereumClient}
//       />
//     </>)

// }

// function BridgeWithWalletConnect() {

//   return (<WalletConnectWrapper>
//     <Bridge />
//   </WalletConnectWrapper>)
// }

// function ExplorerWithWalletConnect() {

//   return (<WalletConnectWrapper>
//     <ExplorerPage />
//   </WalletConnectWrapper>)
// }

// function PoolWithWalletConnect() {

//   return (<WalletConnectWrapper>
//     <PoolPage />
//   </WalletConnectWrapper>)
// }

// function SwapWithWalletConnect() {

//   return (<WalletConnectWrapper>
//     <HomePage />
//   </WalletConnectWrapper>)
// }

// function TransactionDetailsWithWalletConnect() {

//   return (<WalletConnectWrapper>
//     <TransactionDetailsPage />
//   </WalletConnectWrapper>)
// }
