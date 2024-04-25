import React, { useEffect, useState } from "react";
import Wallet from "../assets/img/Wallet.svg";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { isMobile } from "react-device-detect";
import {
  useTonAddress,
  useTonConnectModal,
  useTonConnectUI,
} from "@tonconnect/ui-react";
import { useAppSelector, useAppDispatch } from "../hooks/storage";
import { setSenderAddress } from "../store/bridgeSlice";
import TonIcon from "../assets/img/ton.svg";
import WalletConnectIcon from "../assets/img/wallet-connect.svg";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ConnectWalletModal({ modalIsOpen, setModalIsOpen }) {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const {
    state: tonState,
    open: openTonModal,
    close: closeTonModal,
  } = useTonConnectModal();

  const bridge = useAppSelector((state) => state.bridge);
  const dispatch = useAppDispatch();
  const tonAddress = useTonAddress();
  const [alertIsOpen, setAlertIsOpen] = useState(false);

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
    if (bridge.fromChain === "TON" || bridge.fromChain === "TONTestnet") {
      console.log("ton", { tonAddress });
      if (tonAddress) {
        dispatch(setSenderAddress(tonAddress));
      }
    } else if (address) {
      console.log("evm", { address });
      dispatch(setSenderAddress(address));
    } else {
      dispatch(setSenderAddress(""));
    }
  }, [address, tonAddress, bridge.fromChain]);

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
            <img src={WalletConnectIcon} alt="Wallet" height={24} />
            {isConnected
              ? `${address.slice(0, showCharacters)}...${address.slice(
                  -showCharacters
                )}`
              : "WalletConnect"}
          </div>
        </div>
        {tonAddress ? (
          <div
            className="connectWallet"
            onClick={() => setAlertIsOpen(true) && closeModal()}
          >
            <div>
              <img src={TonIcon} alt="Wallet" height={24} />
              {`${tonAddress.slice(0, showCharacters)}...${tonAddress.slice(
                -showCharacters
              )}`}
            </div>
          </div>
        ) : (
          <div
            className="connectWallet"
            onClick={() => openTonModal() && closeModal()}
          >
            <div>
              <img src={TonIcon} alt="Wallet" height={24} />
              TON Connect
            </div>
          </div>
        )}
      </Modal>
      <DisconnectTonModal
        alertIsOpen={alertIsOpen}
        setAlertIsOpen={setAlertIsOpen}
      />
    </div>
  );
}

const DisconnectTonModal = ({ alertIsOpen, setAlertIsOpen }) => {
  const tonConnectUi = useTonConnectUI();
  return (
    <div>
      <Modal
        isOpen={alertIsOpen}
        onRequestClose={() => setAlertIsOpen(false)}
        className="alertModal whiteBorder"
        overlayClassName="alertModalOverlay"
      >
        <div className="alertModalHeader">
          <h4 className="alertModalTitle">Alert</h4>
          <button
            className="alertModalCloseBtn"
            onClick={() => setAlertIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>Do you want to disconnect Ton Wallet?</div>
        <button
          className="disconnectTonButton"
          onClick={() => tonConnectUi[0].disconnect() && setAlertIsOpen(false)}
        >
          <div>Disconnect</div>
        </button>
      </Modal>
    </div>
  );
};
