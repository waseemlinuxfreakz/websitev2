import React from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

import RightArrow from "../../../assets/img/right-arrow.svg";
import Copy from "../../../assets/img/copy.svg";
import Target from "../../../assets/img/target.svg";
import { getExplorerByChainName, addressToAccount } from "../../../utils";
import { ChainNameToTypeChainName } from "../../../types";

import { useAppSelector, useAppDispatch } from "../../../hooks/storage";
import { resetBridgeProgress } from "../../../store/bridgeSlice";

function TrackExplorer() {
  const dispatch = useAppDispatch();
  const bridge = useAppSelector((state) => state.bridge);
  const tx = useAppSelector((state) => state.explorer.bridgeTransaction);

  const showCharacters = isMobile ? 6 : 18;

  function clearBridgeProgress() {
    dispatch(resetBridgeProgress());
  }

  return (
    <div className="trackExplorer">
      {tx && tx.bridgeHash && (
        <div className="trackExploerTitle">
          <h4>
            <Link
              to={`/transactionDetails/${tx.bridgeHash}`}
              onClick={clearBridgeProgress}
            >
              {`TX ${tx.bridgeHash} details`}
            </Link>
          </h4>
          <img src={RightArrow} alt="RightArrow" className={`arrowRight`} />
        </div>
      )}

      {bridge.fromHash && (
        <div className="destinationHas">
          <div className="destinationHasTitle">
            <h4>Original hash</h4>

            <span>
              <a
                href={`${getExplorerByChainName(
                  ChainNameToTypeChainName[bridge.fromChain],
                )}${
                  bridge.fromChain === "tonTestnet" ||
                  bridge.fromChain === "ton"
                    ? "/transaction/" + bridge.fromHash
                    : "/tx/" + addressToAccount(bridge.fromHash)
                }`}
                className="exportLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <a
                href={`${getExplorerByChainName(
                  ChainNameToTypeChainName[bridge.fromChain],
                )}/tx/${addressToAccount(bridge.fromHash)}`}
                className="exportLink"
                target="_blank"
                rel="noopener noreferrer"
              > */}

                <img
                  src={Target}
                  alt="Open transaction in the destination chain explorer"
                />
              </a>
              <img
                className="btn-copy"
                src={Copy}
                alt="Copy"
                onClick={() => navigator.clipboard.writeText(bridge.fromHash)}
              />
            </span>
          </div>
          <div className="destinationHasLink" style={{ textAlign: "center" }}>
            {`${bridge.fromHash.slice(0, showCharacters)}...${bridge.fromHash.slice(-showCharacters)}`}
          </div>
        </div>
      )}

      {bridge.toHash && (
        <div className="destinationHas">
          <div className="destinationHasTitle">
            <h4>Destination hash</h4>
            <span>
              <a
                href={`${getExplorerByChainName(
                  ChainNameToTypeChainName[bridge.toChain],
                )}${
                  bridge.toChain === "tonTestnet" || bridge.toChain === "ton"
                    ? "/transaction/" + bridge.toHash
                    : "/tx/" + addressToAccount(bridge.toHash)
                }`}
                className="exportLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Target}
                  alt="Open transaction in the destination chain explorer"
                />
              </a>
              <img
                className="btn-copy"
                src={Copy}
                alt="Copy"
                onClick={() => navigator.clipboard.writeText(bridge.toHash)}
              />
            </span>
          </div>
          <div className="destinationHasLink" style={{ textAlign: "center" }}>
            {`${bridge.toHash.slice(0, showCharacters)}...${bridge.toHash.slice(-showCharacters)}`}
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackExplorer;
