import React, { useEffect, useState } from 'react';
import Copy from '../../../assets/img/copy.svg';

import { useAppSelector } from '../../../hooks/storage';

function TransactionHash() {

  const explorer = useAppSelector(state => state.explorer);

  const [isCopied, setIsCopied] = useState(false);
  const [hash, setHash] = useState(explorer.bridgeHash);

  useEffect(() => {

    setHash(explorer.bridgeHash);

  }, [explorer.hash])

  const handleCopyClick = () => {
    if (navigator && navigator.clipboard) {
      try {
        navigator.clipboard.writeText(explorer.bridgeHash);
      } catch (error) {
        console.error(`Error: could not copy to clipboard. Reason:`, error.message);
      }

    } else {
      console.error(`Error: could not copy to clipboard`);
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
            {isCopied && <span className="copiedAlert">{`The hash successfully copied!`}</span>}
            <img src={Copy} alt="Copy" />
          </button>
        </div>
      </div>
      <h3>{hash}</h3>
    </div>
  );
}

export default TransactionHash;
