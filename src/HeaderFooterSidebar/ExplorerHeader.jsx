import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ConnectWalletModal from "./ConnectWalletModal";
import ConnectionIndicator from "./ConnectionIndicator";
import ExplorerHeaderSearch from "./ExplorerHeaderSearch";
import Wallet from "../assets/img/Wallet.svg";
import { useAppSelector } from "../hooks/storage";

function ExplorerHeader() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const bridge = useAppSelector((state) => state.bridge);

  return (
    <header id="header">
      <div className="container">
        <div className="headerNave">
          <h1 className="siteTitle">Explorer</h1>
          <ExplorerHeaderSearch />
          <div className="headerRightSide">
            <ConnectionIndicator />
            <div
              className="connectWallet"
              onClick={() => setModalIsOpen(!modalIsOpen)}
            >
              <div>
                <img src={Wallet} alt="Wallet" />
                {bridge.senderAddress ? `${bridge.senderAddress.slice(0, 6)}...${bridge.senderAddress.slice(
                  -6,
                )}` : "Connect"}
              </div>
            </div>
            <ConnectWalletModal
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default ExplorerHeader;
