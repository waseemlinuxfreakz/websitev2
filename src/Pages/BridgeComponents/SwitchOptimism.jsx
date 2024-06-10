import React from "react";
import SwitchAleart from "../../assets/img/switch-alert.svg";
import Alerticons from "../../assets/img/Alerticons.svg";

function SwitchOptimism() {
  return (
    <div className="switchOptimism">
      <div className="switchOptimismText">
        <img src={Alerticons} alt="Alerticons" />
        Please Switch to Optimism
      </div>
    </div>
  );
}

export default SwitchOptimism;
