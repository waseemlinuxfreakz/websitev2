import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Responsive.css';
import HomePage from './Pages/Home';
import Bridge from './Pages/Bridge';
import ExplorerPage from './Pages/Explorer';
import PoolPage from './Pages/Pool';
import TransactionDetailsPage from './Pages/TransactionDetailsPage';
import YourLiquidityPage from './Pages/YourLiquidityPage';

import { ALL_CHAINS } from './constants/chains/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Web3Modal related
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';

const supportedChains = ALL_CHAINS;

const projectId = "0792a282f1d5c406794a1cbec7d7f4b4";

const { publicClient } = configureChains(supportedChains, [w3mProvider({ projectId })]);

const wagmiConfig = createConfig({
  autoConnect: true,
  isNewChainsStale: false,
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
            <Route path="/" element={<HomePage />} />
            <Route path="/bridge" element={<Bridge />} />
            <Route path="/explorer" element={<ExplorerPage />} />
            <Route path="/transactionDetails/:hash" element={<TransactionDetailsPage />} />
            <Route path="/pool" element={<PoolPage />} />
            <Route path="/pool/your-liquidity" element={<YourLiquidityPage />} />
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
