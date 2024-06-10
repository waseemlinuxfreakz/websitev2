import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks/storage";
import {
  setBridgeDeadline,
  setBridgeSlippage,
} from "../../../store/bridgeSlice";
import { setSwapDeadline, setSwapSlippage } from "../../../store/swapSlice";

export default function SlippagePopUp({ parent }) {
  const InfoIcon = "/img/transfer-progress/InfoIcon.svg";

  // ========== COMMON ==========

  const dispatch = useAppDispatch();
  const bridge = useAppSelector((state) => state.bridge);
  const swap = useAppSelector((state) => state.swap);

  function isInsideBridge() {
    return parent && parent.toLowerCase() === "bridge";
  }

  let slice;
  if (isInsideBridge()) {
    slice = bridge;
  } else {
    slice = swap;
  }

  const [selected01, setSelected01] = useState(false);
  const [selected05, setSelected05] = useState(true);
  const [selected10, setSelected10] = useState(false);
  const [customSlippage, setCustomSlippage] = useState("");

  // ========== SLIPPAGE ==========

  function setSelected(_01, _05, _10) {
    setSelected01(_01);
    setSelected05(_05);
    setSelected10(_10);
  }

  function selectParentAndDispatchSlippage(choice) {
    // Slippage cannot be less than 0.1%
    let choice_ = choice < 0.1 ? 0.1 : choice;

    if (isInsideBridge()) {
      dispatch(setBridgeSlippage(choice_));
    } else {
      dispatch(setSwapSlippage(choice_));
    }
  }

  function onSlippageSelect(choice) {
    switch (choice) {
      case 0.1:
        setSelected(true, false, false);
        setCustomSlippage("");
        break;
      case 0.5:
        setSelected(false, true, false);
        setCustomSlippage("");
        break;
      case 1.0:
        setSelected(false, false, true);
        setCustomSlippage("");
        break;
      default:
        // If custom slippage is selected
        setSelected(false, false, false);
        setCustomSlippage(choice);
    }

    selectParentAndDispatchSlippage(choice);
  }

  useEffect(() => {
    if (slice && slice.slippage) {
      onSlippageSelect(slice.slippage);
    }
  }, [slice.slippage]);

  function onCustomSlippageChange(e) {
    e.preventDefault();
    let customValue = e.target.value;
    if (customValue) {
      customValue = Number(customValue);
      setSelected(false, false, false);
      selectParentAndDispatchSlippage(customValue);
    } else {
      selectParentAndDispatchSlippage("");
    }
  }

  // ========== DEADLINE ==========

  const [deadline5min, setDeadline5min] = useState(false);
  const [deadline10min, setDeadline10min] = useState(false);
  const [customDeadline, setCustomDeadline] = useState("");

  function onTxDeadlineChoice(choice) {
    switch (choice) {
      case 5:
        setDeadline5min(true);
        setDeadline10min(false);
        setCustomDeadline("");
        break;
      case 10:
        setDeadline5min(false);
        setDeadline10min(true);
        setCustomDeadline("");
        break;
      default:
        // If custom is selected
        setDeadline5min(false);
        setDeadline10min(false);
        if (choice != 5 && choice != 10) {
          setCustomDeadline(choice);
        }
    }

    if (isInsideBridge()) {
      dispatch(setBridgeDeadline(choice));
    } else {
      dispatch(setSwapDeadline(choice));
    }
  }

  function onCustomDeadlineChange(e) {
    e.preventDefault();
    let customValue = e.target.value;
    if (customValue) {
      onTxDeadlineChoice(customValue);
    } else {
      setCustomDeadline("");
    }
  }

  useEffect(() => {
    if (slice && slice.deadline) {
      onTxDeadlineChoice(slice.deadline);
    }
  }, [slice.deadline]);

  return (
    <div className="slippageModal">
      <div className="slipageModal">
        <div className="slipageModalTitle">
          Max slippage
          <img src={InfoIcon} title="Info" alt="InfoIcon" />
        </div>
        <div className="slipageValueBox">
          <div className="slipageValue">
            <span
              className={`valueItem ${selected01 ? "active" : ""}`}
              id="value1"
              onClick={() => onSlippageSelect(0.1)}
            >
              0.1 %
            </span>
            <span
              className={`valueItem ${selected05 ? "active" : ""}`}
              id="value2"
              onClick={() => onSlippageSelect(0.5)}
            >
              0.5 %
            </span>
            <span
              className={`valueItem ${selected10 ? "active" : ""}`}
              id="value3"
              onClick={() => onSlippageSelect(1.0)}
            >
              1.0 %
            </span>
          </div>
          <div className="customeValue">
            <input
              type="number"
              placeholder="Custom"
              onChange={(e) => onCustomSlippageChange(e)}
              value={customSlippage}
            />
            <span>%</span>
          </div>
        </div>
        <br />
        <div className="timeSelect">
          <div className="slipageModalTitle">
            Txn deadline <img src={InfoIcon} title="Info" alt="InfoIcon" />
          </div>
          <div className="slipageValueBox">
            <div className="slipageValue">
              <span
                className={`valueItem ${deadline5min ? "active" : ""}`}
                id="timeValue1"
                onClick={() => onTxDeadlineChoice(5)}
              >
                5 min
              </span>
              <span
                className={`valueItem ${deadline10min ? "active" : ""}`}
                id="timeValue2"
                onClick={() => onTxDeadlineChoice(10)}
              >
                10 min
              </span>
            </div>
            <div className="customeValue">
              <input
                type="number"
                placeholder="Custom"
                onChange={(e) => onCustomDeadlineChange(e)}
                value={customDeadline}
              />
              <span>min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
