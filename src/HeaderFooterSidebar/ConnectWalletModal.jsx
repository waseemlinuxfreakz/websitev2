import React, { useEffect } from "react";
import Wallet from "../assets/img/Wallet.svg";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { isMobile } from "react-device-detect";
import { useTonConnectModal } from "@tonconnect/ui-react";
import { useAppSelector, useAppDispatch } from "../hooks/storage";
import { setSenderAddress } from "../store/bridgeSlice";
import { useTonWallet } from "@tonconnect/ui-react";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ConnectWalletModal({ modalIsOpen, setModalIsOpen }) {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { open: openTonModal, close: closeTonModal } = useTonConnectModal();
  const bridge = useAppSelector((state) => state.bridge);
  const dispatch = useAppDispatch();
  const tonWallet = useTonWallet();

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

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    const tonAddress = tonWallet?.account?.address;
    if (address) {
      dispatch(setSenderAddress(address));
    } else if (tonAddress) {
      dispatch(setSenderAddress(tonAddress));
    } else {
      dispatch(setSenderAddress(""));
    }
  }, [address, tonWallet]);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
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
