import React, { useEffect } from "react";
import Wallet from "../assets/img/Wallet.svg";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { isMobile } from "react-device-detect";
import { useTonConnectModal } from "@tonconnect/ui-react";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ConnectWalletModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { open: openTonModal, close: closeTonModal } = useTonConnectModal();

  const applyCssToShadowDom = () => {
    var style = document.createElement("style");
    var host = document.querySelector("w3m-modal");
    if (host) {
      // setTimeout(() => {
      style.innerHTML =
        "@media screen and (min-width: 1000px) {.w3m-container {left: 140px;}}";
      host.shadowRoot.appendChild(style);
      // }, 1000);
    }
  };

  const showCharacters = isMobile ? 3 : 6;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="connectWallet" onClick={() => openModal()}>
        <div>
          <img src={Wallet} alt="Wallet" />
          {isConnected
            ? `${address.slice(0, showCharacters)}...${address.slice(
                -showCharacters
              )}`
            : "Connect"}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="connectWalletModal"
        overlayClassName="connectWalletModalOverlay"
      >
        <div
          className="connectWallet"
          onClick={() => {
            open();
            applyCssToShadowDom();
            closeModal();
          }}
        >
          <div>
            <img src={Wallet} alt="Wallet" />
            {isConnected
              ? `${address.slice(0, showCharacters)}...${address.slice(
                  -showCharacters
                )}`
              : "WalletConnect"}
          </div>
        </div>

        <div
          className="connectWallet"
          onClick={() => openTonModal() && closeModal()}
        >
          <div>
            <img src={Wallet} alt="Wallet" />
            TON Connect
          </div>
        </div>
      </Modal>
    </div>
  );
}
