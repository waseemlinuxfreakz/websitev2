import React, { useState, useEffect, useRef } from "react";
import SwapMenuBtn from "../../assets/img/Icon-button.svg";
import SwapMenuBtn2 from "../../assets/img/Icon-button2.svg";

import SlippagePopUp from "../CommonComponents/Slippage/SlippagePopUp";
import { useAppSelector } from "../../hooks/storage";

const SwapContainerMenu = ({ parent }) => {
  const bridge = useAppSelector((state) => state.bridge);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isActive, setActive] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setActive(!isActive);
    toggleBodyClass(); // Call the function to toggle body class
  };

  const isSlippageButtonInVisible =
    parent === "bridge" && bridge.fromToken === bridge.toToken;

  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalVisible(false);
      setActive(false);
      toggleBodyClass(); // Call the function to toggle body class
    }
  };

  const toggleBodyClass = () => {
    document.body.classList.remove("openmenu");
    document.querySelector(".swapMenuContainer").classList.remove("openmenu");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {" "}
      {!isSlippageButtonInVisible ? (
        <div className="swapMenuContainer" ref={modalRef}>
          <button
            className={`swapMenuBtn ${isActive ? "active" : ""}`}
            onClick={toggleModal}
          >
            <img src={SwapMenuBtn} alt="SwapMenuBtn" className="openMenu" />
            <img src={SwapMenuBtn2} alt="SwapMenuBtn" className="closeMenu" />
          </button>

          {isModalVisible && <SlippagePopUp parent={parent} />}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SwapContainerMenu;
