import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Copy from "../../../assets/img/copy.svg";
import { useAppSelector } from "../../../hooks/storage";

function TransactionHash() {
  const { emmetHash } = useParams();
  const explorer = useAppSelector((state) => state.explorer);

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    if (navigator && navigator.clipboard) {
      try {
        navigator.clipboard.writeText(emmetHash);
      } catch (error) {
        console.warn(
          `Error: could not copy to clipboard. Reason:`,
          error.message,
        );
      }
    } else {
      console.warn(`Error: could not copy to clipboard`);
    }
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="transactionHash">
      <div className="transactionHashTop">
        <p>Transaction hash</p>
        <div className="transactionHashTopRight">
          <button className="copyLink" onClick={handleCopyClick}>
            {isCopied && (
              <span className="copiedAlert">{`The hash successfully copied!`}</span>
            )}
            <img src={Copy} alt="Copy" />
          </button>
        </div>
      </div>
      <h3>{explorer.bridgeTransaction.txHash}</h3>
    </div>
  );
}

export default TransactionHash;
