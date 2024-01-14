import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Responsive.css';
import HomePage from './Pages/Home';
import Bridge from './Pages/Bridge';
import ExplorerPage from './Pages/Explorer';
import PoolPage from './Pages/Pool';
import TransactionDetailsPage from './Pages/TransactionDetailsPage';
import YourLiquidityPage from './Pages/YourLiquidityPage';

// Web Page
import WebHome from './Pages/WebPages/WebHome';
import PrivacyPolicy from './Pages/WebPages/PrivacyPolicy';
import TermsService from './Pages/WebPages/TermsService';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Web3Modal related
import { Web3Modal } from '@web3modal/react';
import { WagmiConfig } from 'wagmi';
import { getWalletConnectInstance } from './walletConnectSetup';

function App() {
  return (
    <>
      <Router
        // Open all the pages at the top
        scrollBehavior={() => ({ y: 0 })}
      >
        <Routes>
          <Route path="/" element={< WebHome />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsService />} />
          <Route path="/bridge" element={<BridgeWithWalletConnect />} />
          <Route path="/explorer" element={<ExplorerWithWalletConnect />} />
          <Route path="/swap" element={< SwapWithWalletConnect />} />
          <Route path="/pool" element={<PoolWithWalletConnect />} />
          <Route path="/pool/your-liquidity" element={<YourLiquidityPage />} />
          <Route path="/transactionDetails/:hash" element={<TransactionDetailsWithWalletConnect />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;


function WalletConnectWrapper({ children }) {

  const walletConnectInstance = getWalletConnectInstance();

  return (
    <>
      <WagmiConfig config={walletConnectInstance.wagmiConfig}>
        {children}
      </WagmiConfig>
      <Web3Modal
        projectId={walletConnectInstance.projectId}
        ethereumClient={walletConnectInstance.ethereumClient}
      />
    </>)

}

function BridgeWithWalletConnect() {

  return (<WalletConnectWrapper>
    <Bridge />
  </WalletConnectWrapper>)
}

function ExplorerWithWalletConnect() {

  return (<WalletConnectWrapper>
    <ExplorerPage />
  </WalletConnectWrapper>)
}

function PoolWithWalletConnect() {

  return (<WalletConnectWrapper>
    <PoolPage />
  </WalletConnectWrapper>)
}

function SwapWithWalletConnect() {

  return (<WalletConnectWrapper>
    <HomePage />
  </WalletConnectWrapper>)
}

function TransactionDetailsWithWalletConnect() {

  return (<WalletConnectWrapper>
    <TransactionDetailsPage />
  </WalletConnectWrapper>)
}