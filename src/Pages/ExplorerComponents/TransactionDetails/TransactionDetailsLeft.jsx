import React, { useEffect, useState } from "react";

import { useAppSelector } from "../../../hooks/storage";
import {
  getDomainToChainName,
  getTimeLength,
  getLogoByChainName,
  getExplorerByChainName,
  addressToAccount,
} from "../../../utils";
import useElapsedTime from "../../../hooks/useElapsedTime";
import { CHAIN_ID_TO_NAME } from "../../../types";

function TransactionDetailsLeft() {
  const Clock = "/img/Clock.svg";
  const Target = "/img/target.svg";

  const Pending = "/img/explorer/Pending.svg";
  const Success = "/img/explorer/Success.svg";
  const Failed = "/img/explorer/Failed.svg";

  const explorer = useAppSelector((store) => store.explorer);

  const started =
    explorer && explorer.bridgeTransaction && explorer.bridgeTransaction.started
      ? explorer.bridgeTransaction.started.toString()
      : "";

  const finished =
    explorer &&
      explorer.bridgeTransaction &&
      explorer.bridgeTransaction.finished
      ? explorer.bridgeTransaction.finished.toString()
      : "";

  const elapsedTime = useElapsedTime(started);

  const txLength = getTimeLength(started, finished);

  const [isCopied, setIsCopied] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);

  const handleCopyClick = () => {
    try {
      (async () => {
        if (
          CHAIN_ID_TO_NAME[explorer.bridgeTransaction.fromChainId] === "ton" ||
          CHAIN_ID_TO_NAME[explorer.bridgeTransaction.fromChainId] ===
          "tonTestnet"
        ) {
          await navigator.clipboard.writeText(
            explorer.bridgeTransaction.originalHash,
          );
        } else {
          await navigator.clipboard.writeText(
            addressToAccount(explorer.bridgeTransaction.originalHash),
          );
        }
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
        if (
          CHAIN_ID_TO_NAME[explorer.bridgeTransaction.toChainId] === "ton" ||
          CHAIN_ID_TO_NAME[explorer.bridgeTransaction.toChainId] ===
          "tonTestnet"
        ) {
          await navigator.clipboard.writeText(
            explorer.bridgeTransaction.destinationHash,
          );
        } else {
          await navigator.clipboard.writeText(
            addressToAccount(explorer.bridgeTransaction.destinationHash),
          );
        }
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
          <div className="transactionDetailsListLeft">Type</div>
          <div className="transactionDetailsListRight">
            <span className="transfer">{"Transfer"}</span>
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Status</div>
          <div className="transactionDetailsListRight">
            <span className="success">
              <img
                src={
                  explorer.bridgeTransaction.destinationHash
                    ? Success
                    : Date.now() - Number(explorer.bridgeTransaction.started) <
                      5 * 60 * 1000 // 5 mins
                      ? Pending
                      : Failed
                }
                alt="Status"
              />{" "}
              {explorer.bridgeTransaction.destinationHash
                ? "Success"
                : Date.now() - Number(explorer.bridgeTransaction.started) <
                  5 * 60 * 1000 // 5 mins
                  ? "Pending"
                  : "Failed"}
            </span>
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">From</div>
          <div className="transactionDetailsListRight">
            <div className="chainAddress">
              {explorer.bridgeTransaction.fromChainId && (
                <img
                  src={`../${getLogoByChainName(
                    CHAIN_ID_TO_NAME[explorer.bridgeTransaction.fromChainId],
                  )}`}
                  alt="Original Blockchain Logo"
                  width="25px"
                  height="25px"
                />
              )}

              <div className="chainLink">
                {explorer.bridgeTransaction.originalHash
                  ? CHAIN_ID_TO_NAME[explorer.bridgeTransaction.fromChainId] ===
                    "ton" ||
                    CHAIN_ID_TO_NAME[explorer.bridgeTransaction.fromChainId] ===
                    "tonTestnet"
                    ? `${explorer.bridgeTransaction.originalHash &&
                    explorer.bridgeTransaction.originalHash.slice(0, 6)
                    }...${explorer.bridgeTransaction.originalHash &&
                    explorer.bridgeTransaction.originalHash.slice(-10)
                    }`
                    : addressToAccount(
                      `${explorer.bridgeTransaction.originalHash &&
                      explorer.bridgeTransaction.originalHash.slice(0, 6)
                      }...${explorer.bridgeTransaction.originalHash &&
                      explorer.bridgeTransaction.originalHash.slice(-10)
                      }`,
                    )
                  : "N/A"}
              </div>
            </div>
            {explorer.bridgeTransaction.originalHash && (
              <a
                href={`${getExplorerByChainName(
                  CHAIN_ID_TO_NAME[explorer.bridgeTransaction.fromChainId],
                )}${CHAIN_ID_TO_NAME[explorer.bridgeTransaction.fromChainId] === "tonTestnet"
                  || CHAIN_ID_TO_NAME[explorer.bridgeTransaction.fromChainId] === "ton"
                  ? '/transaction/' + explorer.bridgeTransaction.originalHash
                  : '/tx/' + addressToAccount(explorer.bridgeTransaction.originalHash)}`}
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
            {explorer.bridgeTransaction.originalHash && (
              <button className="copyLink" onClick={() => handleCopyClick()}>
                {isCopied ? (
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
          <div className="transactionDetailsListLeft">To</div>
          <div className="transactionDetailsListRight">
            <div className="chainAddress">
              {explorer.bridgeTransaction.toChainId && (
                <img
                  src={`../${getLogoByChainName(
                    CHAIN_ID_TO_NAME[explorer.bridgeTransaction.toChainId],
                  )}`}
                  alt="Destination Blockchain Logo"
                  width="25px"
                  height="25px"
                />
              )}

              <div className="chainLink">
                {explorer.bridgeTransaction.destinationHash
                  ? CHAIN_ID_TO_NAME[explorer.bridgeTransaction.toChainId] ===
                    "ton" ||
                    CHAIN_ID_TO_NAME[explorer.bridgeTransaction.toChainId] ===
                    "tonTestnet"
                    ? `${explorer.bridgeTransaction.destinationHash &&
                    explorer.bridgeTransaction.destinationHash.slice(0, 6)
                    }...${explorer.bridgeTransaction.destinationHash &&
                    explorer.bridgeTransaction.destinationHash.slice(-10)
                    }`
                    : addressToAccount(
                      `${explorer.bridgeTransaction.destinationHash &&
                      explorer.bridgeTransaction.destinationHash.slice(0, 6)
                      }...${explorer.bridgeTransaction.destinationHash &&
                      explorer.bridgeTransaction.destinationHash.slice(-10)
                      }`,
                    )
                  : "N/A"}
              </div>
            </div>

            {explorer.bridgeTransaction.destinationHash && (
              <a
                href={`${getExplorerByChainName(
                  CHAIN_ID_TO_NAME[explorer.bridgeTransaction.toChainId],
                )}${CHAIN_ID_TO_NAME[explorer.bridgeTransaction.toChainId] === "tonTestnet"
                  || CHAIN_ID_TO_NAME[explorer.bridgeTransaction.toChainId] === "ton"
                  ? '/transaction/' + explorer.bridgeTransaction.destinationHash
                  : '/tx/' + addressToAccount(explorer.bridgeTransaction.destinationHash)}`}
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

            {explorer.bridgeTransaction.destinationHash && (
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
            {explorer.bridgeTransaction.started && (
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
            )}
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Transaction length</div>
          <div className="transactionDetailsListRight">
            {explorer.bridgeTransaction.finished ? (
              <span>
                {txLength.days ? `${txLength.days} days ` : ""}
                {txLength.hours ? `${txLength.hours} hrs ` : ""}
                {txLength.minutes ? `${txLength.minutes} min ` : ""}
                {txLength.seconds ? `${txLength.seconds} sec ` : ""}
              </span>
            ) : (
              "N/A"
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TransactionDetailsLeft;
