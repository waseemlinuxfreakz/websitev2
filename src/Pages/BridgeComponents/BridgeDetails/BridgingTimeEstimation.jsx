import React, { useEffect, useState } from "react";
import EstimatedTime from "../../../assets/img/Estimatedtime.svg";
import { useAppSelector } from "../../../hooks/storage";
import {
  ChainToDestinationDomain,
  ChainNameToTypeChainName,
  CHAIN_NAME_TO_ID,
} from "../../../types";
import { chainFactory } from "../../../store/chainFactory";
import { msToTime } from "../../../utils/msToTime";

export default function BridgingTimeEstimation() {
  const bridge = useAppSelector((state) => state.bridge);
  const [estimatedTime, setEstimatedTime] = useState(40 * 1000); // 40 sec default

  useEffect(() => {
    (async () => {
      try {
        if (bridge.fromChain != bridge.toChain) {

          const handler = await chainFactory.inner(
            ChainToDestinationDomain[ChainNameToTypeChainName[bridge.fromChain]],
          );

          const time = await handler.estimateTime(
            // eslint-disable-next-line no-undef
            BigInt(CHAIN_NAME_TO_ID[ChainNameToTypeChainName[bridge.toChain]]),
            bridge.fromToken,
            bridge.toToken,
          );
          if (time) {
            setEstimatedTime(Number(time));
          }

        }

      } catch (error) {
        console.log(error);
      }
    })();
  }, [bridge.fromChain, bridge.toChain, bridge.fromToken, bridge.toToken]);

  return (
    <div className="detialItem">
      <div className="detialItemLeft">Estimated time</div>
      <div className="detialItemRight">
        <img src={EstimatedTime} alt="EstimatedTime" />
        {msToTime(estimatedTime)}
      </div>
    </div>
  );
}
