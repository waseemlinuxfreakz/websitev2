import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import useActionButtonDiabled from "../../hooks/useActionButtonDisabled";
import { useTonAddress } from "@tonconnect/ui-react";
import { useWallet } from "@solana/wallet-adapter-react";
import ConnectWalletModal from "../../HeaderFooterSidebar/ConnectWalletModal";

function MainActionButton() {
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const disabled = useActionButtonDiabled("swap");
  const tonAddress = useTonAddress();
  const solanaWallet = useWallet();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onClickSelectAction = () => {
    if (!isConnected || !tonAddress || !solanaWallet.publicKey) {
      setModalIsOpen(true);
    }
  };

  return (
    <div className="connectBtn">
      <button
        className="MainActionButton"
        disabled={disabled}
        onClick={onClickSelectAction}
      >
        {disabled ? "Enter Amount" : "Connect wallet"}
      </button>
      <ConnectWalletModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </div>
  );
}

export default MainActionButton;
