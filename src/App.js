import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Responsive.css';
import Bridge from './Pages/Bridge';
import ExplorerPage from './Pages/Explorer';
import TransactionDetailsPage from './Pages/TransactionDetailsPage';
// Comming Soon
// import HomePage from './Pages/Home';
// import PoolPage from './Pages/Pool';
// import YourLiquidityPage from './Pages/YourLiquidityPage';

// Web Page
import WebHome from './Pages/WebPages/WebHome';
import PrivacyPolicy from './Pages/WebPages/PrivacyPolicy';
import TermsService from './Pages/WebPages/TermsService';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Web3Modal related
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { ALL_CHAINS } from './constants/chains/index';
// import { getWalletConnectInstance } from './walletConnectSetup';

const supportedChains = ALL_CHAINS;

const projectId = "2bcf20e00bc0f72513e22cd16ce9ae83";
const { publicClient } = configureChains(supportedChains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains: supportedChains }),
  publicClient
});

const ethereumClient = new EthereumClient(wagmiConfig, supportedChains);

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Router
          // Open all the pages at the top
          scrollBehavior={() => ({ y: 0 })}
        >
          <Routes>
            <Route path="/" element={< WebHome />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsService />} />
            <Route path="/bridge" element={<Bridge />} />
            <Route path="/explorer" element={<ExplorerPage />} />
            {/* <Route path="/swap" element={< HomePage />} /> */}
            {/* <Route path="/pool" element={<PoolPage />} /> */}
            {/* <Route path="/pool/your-liquidity" element={<YourLiquidityPage />} /> */}
            <Route path="/transactionDetails/:hash" element={<TransactionDetailsPage />} />
          </Routes>
        </Router>
      </WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
      />

    </>
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