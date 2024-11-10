import React, { useState, useEffect, useRef } from "react";
import { useConfig, useSwitchChain, useChainId, useProof } from "wagmi";

import DownArrow from "../../../assets/img/down-white.svg";
import chainData from "../../../store/lockAndMintChain.json";
import ReactGA from "react-ga";
import { useAppSelector, useAppDispatch } from "../../../hooks/storage";
import {
  setBridgeFromChain,
  setBridgeAmount,
  setBridgeIsTransferFromLp,
  setBridgeReceive,
  setBridgeTokenFee,
} from "../../../store/bridgeSlice";
import { setSwapFromChain } from "../../../store/swapSlice";
import { isMobile } from "react-device-detect";
import {
  CHAIN_NAME_TO_ID,
  ChainNameToTypeChainName,
  ChainToDestinationDomain,
} from "../../../types";
import { chainFactory } from "../../../store/chainFactory";
import usePool from "../../../hooks/usePool";

const findChain = (chainId) => {
  return chainData.find((c) => chainId && chainId === c.id);
};

const findChainByName = (chainName) => {
  return chainData.find((c) => chainName && chainName === c.name);
};

export default function ChainSelectorDropdown({ parent, direction }) {
  const chainId = useChainId();

  const { switchChain } = useSwitchChain();

  // Global State
  const bridge = useAppSelector((state) => state.bridge);
  const { getData } = usePool();

  const dispatch = useAppDispatch();

  const isLayer2View = () =>
    window.location.href.includes("/your-liquidity") ||
    window.location.href.includes("/transactionDetails/");

  const isExplorer = () => window.location.href.includes("/explorer");

  // Local State
  const [selectedChain, setSelectedChain] = useState();

  const [chainArray, setChainArray] = useState(chainData);

  // useEffect(() => {
  //   if (selectedChain) {
  //     if (parent === "header") {
  //       setChainArray(
  //         chainData.filter((chain) => chain.name !== selectedChain.name),
  //       );
  //     } else {
  //       setChainArray(
  //         chainData.filter(
  //           (chain) =>
  //             chain.name !== selectedChain.name &&
  //             chain.name !== bridge.toChain,
  //         ),
  //       );
  //     }
  //   }
  // }, [selectedChain, bridge.toChain]);

  useEffect(() => {
    (async () => {
      if (
        bridge.fromChain &&
        bridge.toChain &&
        bridge.fromToken &&
        bridge.toToken
      ) {
        try {
          const handler = await chainFactory.inner(
            ChainToDestinationDomain[
              ChainNameToTypeChainName[bridge.fromChain]
            ],
          );
          const isTransferFromLp = await handler.isTransferFromLp(
            CHAIN_NAME_TO_ID[ChainNameToTypeChainName[bridge.toChain]],
            bridge.fromToken,
            bridge.toToken,
          );
          dispatch(setBridgeIsTransferFromLp(isTransferFromLp));
        } catch (error) {
          dispatch(setBridgeIsTransferFromLp(false));
        }
      }
    })();
  }, [bridge.fromChain, bridge.toChain, bridge.fromToken, bridge.toToken]);

  useEffect(() => {
    (async () => {
      if (bridge.isTransferFromLp) {
        try {
          const data = await getData(
            bridge.toChain,
            bridge.fromToken,
            bridge.senderAddress,
          );

          console.log({ LpData: data });

          dispatch(setBridgeTokenFee(data.tokenFee / data.feeDecimals));
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [
    bridge.isTransferFromLp,
    bridge.fromChain,
    bridge.toChain,
    bridge.fromToken,
    bridge.senderAddress,
  ]);

  useEffect(() => {
    if (bridge.amount) {
      dispatch(setBridgeReceive(bridge.amount - bridge.tokenFee));
    } else {
      dispatch(setBridgeReceive(""));
    }
  }, [bridge.amount, bridge.tokenFee]);

  const [isListVisible, setListVisible] = useState(false);

  function dispatchChain(name) {
    switch (parent) {
      case "bridge":
        dispatch(setBridgeFromChain(name));
        setChainArray(chainData);
        break;
      case "swap":
        dispatch(setSwapFromChain(name));
        setChainArray(chainData);
        break;
      case "lock-and-mint":
        dispatch(setBridgeFromChain(name));
        setChainArray(chainData);
        break;
      case "explorer":
        dispatch(setBridgeFromChain(name));
        setChainArray(chainData);
        break;
      default:
        dispatch(setBridgeFromChain(name));
        setChainArray(chainData);
    }
  }

  useEffect(() => {
    if (parent === "lock-and-mint") {
      // setChainArray(chainArray);
      const oldBridgeAmount = bridge.amount;
      dispatch(setBridgeAmount(0));
      dispatch(setBridgeAmount(oldBridgeAmount));
    }
  }, [bridge.toChain]);


  useEffect(() => {
    const selChain = findChain(chainId);
    if (selChain) {
      // setSelectedChain({
      //   icon: selChain.icon,
      //   name: selChain.name,
      // });
      dispatchChain(selChain.name);
    }
  }, [chainId]);

  useEffect(() => {
    const selChain = findChainByName(bridge.fromChain);
    if (selChain) {
      setSelectedChain({
        icon: selChain.icon,
        name: selChain.name,
      });
      // dispatchChain(selChain.name);
    }
  }, [bridge.fromChain]);

  const handleChainClick = (icon, name, id) => {
    setSelectedChain({ icon, name });
    dispatchChain(name);
    toggleVisibility();
    switchChain({ chainId: id });
    ReactGA.event({
      category: "User",
      action: "Clicked Button",
      label: "Select a Swap Chain",
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

  // const componentStyles =
  //   isExplorer() && isMobile
  //     ? {
  //         bottom: 0,
  //         position: "fixed",
  //         zIndex: 111,
  //         left: 0,
  //         right: 0,
  //         top: "unset",
  //         borderRadius: "16px 16px 0px 0px",
  //         borderTop: "1px solid #3C3F43",
  //         background: "#1B1D20",
  //         maxHeight: "50vh",
  //         overflow: "auto",
  //       }
  //     : {
  //         bottom: 83,
  //         zIndex: 111,
  //         // left: 0,
  //         // right: 0,
  //         // top: "unset",
  //         borderRadius: "8px",
  //         borderTop: "1px solid #3C3F43",
  //         background: "#1B1D20",
  //         maxHeight: "50vh",
  //         // overflow: "auto",
  //         // height: chainArray.length * 44 + 15,
  //       };

  return (
    <div className="selectCoinLeft" ref={selectCoinRef}>
      <div className="selectedCoin" onClick={toggleVisibility}>
        {selectedChain && (
          <div className="coinNameIcon">
            <img
              src={`${isLayer2View() ? "../" : ""}${selectedChain.icon}`}
              alt={selectedChain.name}
              width="30px"
            />
            <span>{selectedChain.name}</span>
          </div>
        )}

        <img src={DownArrow} alt="Down Arrow" />
      </div>
      <ul
        className={`selectCoinList
            ${isListVisible ? "visible" : "hidden"}`}
        // style={componentStyles}
      >
        {bridge.fromChains.map((chain) => (
          <li className="coinItem" key={chain.id}>
            <div
              className="coinNameIcon"
              onClick={() =>
                handleChainClick(
                  `${isLayer2View() ? "../" : ""}${chain.icon}`,
                  chain.name,
                  chain.id,
                )
              }
            >
              <img
                src={`${isLayer2View() ? "../" : ""}${chain.icon}`}
                alt={chain.name}
                width="30px"
              />
              <span>{chain.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
