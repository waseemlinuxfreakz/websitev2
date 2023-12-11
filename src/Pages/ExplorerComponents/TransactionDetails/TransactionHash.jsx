import React, { useState } from 'react';
import Copy from '../../../assets/img/copy.svg';

function TransactionHash() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
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
            {isCopied && <span className="copiedAlert">Copied!</span>}
            <img src={Copy} alt="Copy" />
          </button>
        </div>
      </div>
      <h3>b4f7460771184d089f34e6aef322a3dc3153432dfb797daf40aa97535a9e2d1f</h3>
    </div>
  );
}

export default TransactionHash;
