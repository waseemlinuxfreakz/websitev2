import React, { useState, useEffect, useRef } from "react";
import "./TokenSelectionDropdown.css";
import ReactGA from "react-ga";
// Icons
import DownArrow from "../../../assets/img/down-white.svg";
import Fox from "../../../assets/img/fox.svg";
// Components
import CoinLinkAddress from "../CoinLinkAddress";
import { useAppSelector, useAppDispatch } from "../../../hooks/storage";
import {
  setFromToken,
  setToToken,
  setFromPrice,
  setToPrice,
} from "../../../store/swapSlice";

export default function TokenSelectionDropdown({ type }) {
  const swap = useAppSelector((state) => state.swap);
  const dispatch = useAppDispatch();

  function getIcon(tokenName) {
    const selTkn = swap.tokens.find((t) => t.name === tokenName);
    return selTkn ? `${isLP() ? "../" : ""}${selTkn.icon}` : "";
  }

  function getIsfrom() {
    return type && type === "from" ? true : false;
  }

  function isLP() {
    return type && type === "LP" ? true : false;
  }

  const [isListVisible, setListVisible] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState({
    icon: getIsfrom() ? getIcon(swap.fromToken) : getIcon(swap.toToken),
    name: getIsfrom() ? swap.fromToken : swap.toToken,
  });

  useEffect(() => {
    const name = getIsfrom() ? swap.fromToken : swap.toToken;
    setSelectedCoin({
      icon: getIsfrom() ? getIcon(swap.fromToken) : getIcon(swap.toToken),
      name,
    });

    // dispatch(getIsfrom() ? setFromPrice(name) : setToPrice(name));
  }, [swap.fromToken, swap.toToken]);

  const handleCoinClick = (icon, name) => {
    setSelectedCoin({ icon, name });
    toggleVisibility();
    dispatch(getIsfrom() ? setFromToken(name) : setToToken(name));
    dispatch(getIsfrom() ? setFromPrice(name) : setToPrice(name));
    ReactGA.event({
      category: "User",
      action: "Clicked Button",
      label: "Select Swap Coin",
    });
  };

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
    <div className="selectCoin" ref={selectCoinRef}>
      <div className="selectedCoin" onClick={toggleVisibility}>
        <div className="coinNameIcon">
          <img src={selectedCoin.icon} alt={selectedCoin.name} />
          <span>{selectedCoin.name}</span>
        </div>
        <img src={DownArrow} alt="Down Arrow" />
      </div>
      <ul className={`selectCoinList ${isListVisible ? "visible" : "hidden"}`}>
        {swap.tokens.map((coin) => (
          <li className="coinItem" key={coin.name}>
            <div
              className="coinNameIcon"
              onClick={() => handleCoinClick(coin.icon, coin.name)}
            >
              <img src={`${isLP() ? "../" : ""}${coin.icon}`} alt={coin.name} />
              <span>{coin.name}</span>
            </div>
            <div className="coinItemRight">
              <CoinLinkAddress />
              <a href="#" className="foxLink">
                <img src={Fox} alt="Metamask" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
