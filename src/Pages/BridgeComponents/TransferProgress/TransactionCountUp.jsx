import React, { useEffect, useState } from "react";
import useElapsedTime from "../../../hooks/useElapsedTime";
import { useAppSelector } from "../../../hooks/storage";

export default function TransactionCountUp({ start }) {
  const elapsedTime = useElapsedTime(start);

  const bridge = useAppSelector((state) => state.bridge);

  const [stopCount, setStopCount] = useState({});
  const [isSetStopTime, setIsSetStopTime] = useState(false);

  useEffect(() => {
    if (bridge.toHash && !isSetStopTime) {
      setStopCount(elapsedTime);
      setIsSetStopTime(true);
    }
  }, [bridge.toHash, elapsedTime]);

  return (
    <h5>
      {!isSetStopTime
        ? `${elapsedTime.hours ? elapsedTime.hours + " hrs " : ""}${elapsedTime.minutes ? elapsedTime.minutes + " min " : ""}${elapsedTime.seconds ? elapsedTime.seconds + " sec" : ""}`
        : `${stopCount.hours ? stopCount.hours + " hrs " : ""}${stopCount.minutes ? stopCount.minutes + " min " : ""}${stopCount.seconds ? stopCount.seconds + " sec" : ""}`}
    </h5>
  );
}
