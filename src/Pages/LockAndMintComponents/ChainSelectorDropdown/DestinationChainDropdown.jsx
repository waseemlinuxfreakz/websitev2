import React, { useState, useEffect, useRef } from "react";
import Ethereum from "../../../assets/img/Ethereum.svg";
import DownArrow from "../../../assets/img/down-white.svg";
import chainData from "../../../store/lockAndMintChain.json";
import { useAppSelector, useAppDispatch } from "../../../hooks/storage";
import { setBridgeToChain } from "../../../store/bridgeSlice";
import ReactGA from "react-ga";
import { CHAIN_NAME_TO_ID } from "../../../types";

export default function DestinationChainDropdown() {
  const findChain = (chainName) => {
    return chainData.find((c) => c.name === chainName);
  };

  const bridge = useAppSelector((state) => state.bridge);
  const dispatch = useAppDispatch();

  const [isListVisible, setListVisible] = useState(false);
  const [selectedChain, setSelectedChain] = useState({
    icon: chainData[0].icon,
    name: chainData[0].name,
  });

  const [chainArray, setChainArray] = useState(chainData);

  useEffect(() => {
    setChainArray(
      chainData.filter(
        (chain) =>
          chain.name !== selectedChain.name && chain.name !== bridge.fromChain
      )
    );
  }, [selectedChain, bridge.fromChain]);

  function handleChainClick(icon, name, id) {
    setSelectedChain({ icon, name });
    toggleVisibility();
    dispatch(setBridgeToChain(name));
    ReactGA.event({
      category: "User",
      action: "Clicked Button",
      label: "Select Swap To Chain",
    });
  }

  //   useEffect(() => {
  //     if (bridge && bridge.toChain) {
  //       setSelectedChain({
  //         icon: chainData[0].icon,
  //         name: chainData[0].name,
  //       });
  //     }
  //   }, [bridge.toChain]);

  useEffect(() => {
    const chain = findChain(selectedChain.name);
    setSelectedChain(chain);
    dispatch(setBridgeToChain(chain.name));
  }, []);

  useEffect(() => {
    const chain = findChain(bridge.toChain);

    if (chain && bridge.fromChain) {
      setSelectedChain(chain);
      dispatch(setBridgeToChain(bridge.toChain));
    }
  }, [bridge.toChain]);

  const toggleVisibility = () => {
    setListVisible(!isListVisible);
  };

  const selectCoinRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectCoinRef.current &&
        !selectCoinRef.current.contains(event.target)
      ) {
        setListVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="selectCoinLeft" ref={selectCoinRef}>
      <div className="selectedCoin" onClick={toggleVisibility}>
        <div className="coinNameIcon">
          <img src={selectedChain.icon} alt={selectedChain.name} width="30px" />
          <span>{selectedChain.name}</span>
        </div>
        <img src={DownArrow} alt="Down Arrow" />
      </div>
      <ul className={`selectCoinList ${isListVisible ? "visible" : "hidden"}`}>
        {chainArray.map((chain) => (
          <li className="coinItem" key={chain.id}>
            <div
              className="coinNameIcon"
              onClick={() => handleChainClick(chain.icon, chain.name, chain.id)}
            >
              <img src={chain.icon} alt={chain.name} width="30px" />
              <span>{chain.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
