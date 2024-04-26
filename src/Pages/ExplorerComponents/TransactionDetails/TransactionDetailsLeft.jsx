import React, { useEffect, useState } from "react";

import { useAppSelector } from "../../../hooks/storage";
import {
  getDomainToChainName,
  getTimeLength,
  getLogoByChainName,
  getExplorerByChainName,
} from "../../../utils";
import useElapsedTime from "../../../hooks/useElapsedTime";

function TransactionDetailsLeft({ txStatus }) {
  const Clock = "/img/Clock.svg";
  const Target = "/img/target.svg";

  const Pending = "/img/explorer/Pending.svg";
  const Success = "/img/explorer/Success.svg";

  const explorer = useAppSelector((store) => store.explorer);

  const elapsedTime = useElapsedTime(explorer.bridgeTransaction.start);

  const txLength = getTimeLength(
    explorer.bridgeTransaction.start,
    explorer.bridgeTransaction.finished
  );

  const [isCopied, setIsCopied] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);

  const handleCopyClick = () => {
    try {
      (async () => {
        await navigator.clipboard.writeText(
          explorer.bridgeTransaction.burnHash
        );
      })();
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      setIsCopied(false);
    }
  };

  const handleCopyClick2 = () => {
    try {
      (async () => {
        await navigator.clipboard.writeText(
          explorer.bridgeTransaction.claimHash
        );
      })();

      setIsCopied2(true);
      setTimeout(() => {
        setIsCopied2(false);
      }, 2000);
    } catch (error) {
      setIsCopied2(false);
    }
  };

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div className="transactionDetailsBox">
      <ul className="transactionDetailsList">
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Txn type</div>
          <div className="transactionDetailsListRight">
            <span className="transfer">
              {explorer.bridgeTransaction.txType}
            </span>
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Status</div>
          <div className="transactionDetailsListRight">
            <span className="success">
              <img
                src={explorer.bridgeTransaction.claimHash ? Success : Pending}
                alt="Status"
              />{" "}
              {explorer.bridgeTransaction.claimHash ? "Success" : "Pending"}
            </span>
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">From</div>
          <div className="transactionDetailsListRight">
            <div className="chainAddress">
              {explorer.bridgeTransaction.originalDomain != -1 && (
                <img
                  src={`../${getLogoByChainName(
                    getDomainToChainName(
                      explorer.bridgeTransaction.originalDomain
                    )
                  )}`}
                  alt="Original Blockchain Logo"
                  width="25px"
                  height="25px"
                />
              )}

              <div className="chainLink">
                {explorer.bridgeTransaction.burnHash != -1 &&
                  `${
                    explorer.bridgeTransaction.burnHash &&
                    explorer.bridgeTransaction.burnHash.slice(0, 6)
                  }...${
                    explorer.bridgeTransaction.burnHash &&
                    explorer.bridgeTransaction.burnHash.slice(-10)
                  }`}
              </div>
            </div>
            {explorer.bridgeTransaction.burnHash && (
              <a
                href={`${getExplorerByChainName(
                  getDomainToChainName(
                    explorer.bridgeTransaction.originalDomain
                  )
                )}/tx/${explorer.bridgeTransaction.burnHash}`}
                className="exportLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Target}
                  alt="Open transaction in the original chain explorer"
                />
              </a>
            )}

            <button className="copyLink" onClick={() => handleCopyClick()}>
              {isCopied ? (
                <span className="copiedAlert">Copied!</span>
              ) : (
                <span className="copyHover">Copy to clipboard</span>
              )}

              <img src={"/img/copy.svg"} alt="Copy" />
            </button>
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">To</div>
          <div className="transactionDetailsListRight">
            <div className="chainAddress">
              {explorer.bridgeTransaction.destinationDomain != -1 && (
                <img
                  src={`../${getLogoByChainName(
                    getDomainToChainName(
                      explorer.bridgeTransaction.destinationDomain
                    )
                  )}`}
                  alt="Destination Blockchain Logo"
                  width="25px"
                  height="25px"
                />
              )}

              <div className="chainLink">
                {explorer.bridgeTransaction.claimHash &&
                  `${
                    explorer.bridgeTransaction.claimHash &&
                    explorer.bridgeTransaction.claimHash.slice(0, 6)
                  }...${
                    explorer.bridgeTransaction.claimHash &&
                    explorer.bridgeTransaction.claimHash.slice(-10)
                  }`}
              </div>
            </div>

            {explorer.bridgeTransaction.claimHash && (
              <a
                href={`${getExplorerByChainName(
                  getDomainToChainName(
                    explorer.bridgeTransaction.destinationDomain
                  )
                )}/tx/${explorer.bridgeTransaction.claimHash}`}
                className="exportLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Target}
                  alt="Open transaction in the destination chain explorer"
                />
              </a>
            )}

            {explorer.bridgeTransaction.claimHash && (
              <button className="copyLink" onClick={handleCopyClick2}>
                {isCopied2 ? (
                  <span className="copiedAlert">Copied!</span>
                ) : (
                  <span className="copyHover">Copy to clipboard</span>
                )}
                <img src={"/img/copy.svg"} alt="Copy" />
              </button>
            )}
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Age</div>
          <div className="transactionDetailsListRight">
            <span className="time">
              <img src={Clock} alt="Clock" />
              {elapsedTime.days ? ` ${elapsedTime.days} days ` : ""}
              {elapsedTime.hours ? ` ${elapsedTime.hours} hrs ` : ""}
              {elapsedTime.minutes ? ` ${elapsedTime.minutes} min ` : ""}
              {elapsedTime.seconds ? ` ${elapsedTime.seconds} sec ` : ""}
              {elapsedTime.days ||
              elapsedTime.hours ||
              elapsedTime.minutes ||
              elapsedTime.seconds
                ? " ago"
                : ""}
            </span>
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Transaction length</div>
          <div className="transactionDetailsListRight">
            {txLength.days ? `${txLength.days} days ` : ""}
            {txLength.hours ? `${txLength.hours} hrs ` : ""}
            {txLength.minutes ? `${txLength.minutes} min ` : ""}
            {txLength.seconds ? `${txLength.seconds} sec ` : ""}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TransactionDetailsLeft;
