import React, { useEffect, useState } from "react";
// Hooks
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAppSelector, useAppDispatch } from "../../hooks/storage";
import useBridgeApproveERC20 from "../../hooks/useBridgeApproveERC20";
import useBridgeTransferEmmet from "../../hooks/useBridgeTransferEmmet";
import useBalance from "../../hooks/useBalance";
import ReactGA, { set } from "react-ga";
// Components
import ButtonSpinner from "../CommonComponents/Spinner/ButtonSpinner";
// Actions
import { setBridgeIsApproving } from "../../store/bridgeSlice";
import ConnectWalletModal from "../../HeaderFooterSidebar/ConnectWalletModal";
import { useTonWallet } from "@tonconnect/ui-react";

function MainActionButton() {
  const dispatch = useAppDispatch();
  const bridge = useAppSelector((state) => state.bridge);
  const { coinBalance, fromBalance } = useBalance();

  const { isConnected } = useAccount();
  const wallet = useTonWallet();

  const { open } = useWeb3Modal();

  const [disabled, setDisabled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const [showSpinner, setShowSpiner] = useState(false);
  const { approve, isApproveLoading } = useBridgeApproveERC20();
  const { burnUSDC, isTransferProcessed, sendInstallment } =
    useBridgeTransferEmmet();

  function isApproveRequired() {
    const needApproval =
      Number(bridge.amount) >
      Number(bridge.allowance) / 10 ** Number(bridge.decimals);
    return needApproval;
  }

  useEffect(() => {
    // console.log("wallet", wallet.account);
    if (isConnected || wallet?.account) {
      if (!bridge.amount || Number(bridge.amount) <= 0) {
        setDisabled(true);
        setCaption("Enter Amount");
        setShowSpiner(false);
      }

      if (isApproveRequired()) {
        setDisabled(false);
        setCaption("Approve");
        setShowSpiner(false);
      }

      if (isApproveLoading) {
        setDisabled(true);
        setShowSpiner(true);
      }

      if (bridge.amount && !isApproveRequired()) {
        setDisabled(false);
        setCaption("Transfer");
        setShowSpiner(false);
      }

      if (fromBalance < bridge.amount) {
        setDisabled(true);
        setShowSpiner(false);
        setCaption("Amount exceeds the token balance");
      }

      if (isTransferProcessed) {
        setDisabled(true);
        setShowSpiner(true);
        setCaption("Processing Transfer...");
      }
    } else {
      setDisabled(false);
      setCaption("Connect wallet");
    }
  }, [
    isConnected,
    bridge.amount,
    isApproveLoading,
    isTransferProcessed,
    wallet,
  ]);

  const onClickSelectAction = () => {
    if (!isConnected || !wallet?.account) {
      setModalIsOpen(true);
    } else {
      if (isApproveRequired()) {
        if (approve) {
          try {
            ReactGA.event({
              category: "User",
              action: "Clicked Button",
              label: "Approve",
            });

            approve();
            dispatch(setBridgeIsApproving(true));
          } catch (error) {
            console.warn(error.message);
            dispatch(setBridgeIsApproving(false));
          }
        }
      } else {
        ReactGA.event({
          category: "User",
          action: "Clicked Button",
          label: "Transfer",
        });
        console.log(`Bridge rn: `, bridge.toChain);
        if (bridge.toChain === "TONTestnet") {
          sendInstallment();
        } else {
          burnUSDC();
        }
      }
    }
  };

  return (
    <div className="connectBtn">
      <button
        className="MainActionButton"
        disabled={disabled}
        onClick={onClickSelectAction}
      >
        {showSpinner && <ButtonSpinner />}
        {caption}
      </button>
      <ConnectWalletModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </div>
  );
}

export default MainActionButton;
