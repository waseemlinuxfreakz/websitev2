import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import useActionButtonDiabled from "../../hooks/useActionButtonDisabled";

function MainActionButton() {
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const disabled = useActionButtonDiabled("swap");

  const onClickSelectAction = () => {
    if (!isConnected) {
      open();
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
    </div>
  );
}

export default MainActionButton;
