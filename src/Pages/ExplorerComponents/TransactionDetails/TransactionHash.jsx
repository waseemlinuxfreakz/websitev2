import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Copy from "../../../assets/img/copy.svg";
import { useAppSelector, useAppDispatch } from "../../../hooks/storage";
import useBridgeTx from "../../../hooks/useBridgeTx";
import { setBridgeTransaction } from "../../../store/explorerSlice";

function TransactionHash() {
  const { hash } = useParams();
  const explorer = useAppSelector((state) => state.explorer);
  const dispatch = useAppDispatch();
  const data = useBridgeTx(hash);
  const bridge = useAppSelector((state) => state.bridge);

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (hash && data) {
      dispatch(setBridgeTransaction(data));
    }
  }, [data]);

  const handleCopyClick = () => {
    if (navigator && navigator.clipboard) {
      try {
        navigator.clipboard.writeText(hash);
      } catch (error) {
        console.warn(
          `Error: could not copy to clipboard. Reason:`,
          error.message
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
      <h3>{hash}</h3>
    </div>
  );
}

export default TransactionHash;
