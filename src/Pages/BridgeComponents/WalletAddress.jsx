import React, { useEffect, useState } from "react";
import { setReceiver } from "../../store/bridgeSlice";
import { useAccount } from "wagmi";
import { isEvmAddress } from "../../verifiers";
import { useAppSelector, useAppDispatch } from "../../hooks/storage";
import { isMobile } from "react-device-detect";
import { Address } from "@ton/core";
import { useTonAddress } from "@tonconnect/ui-react";

function isValidTonAddress(str) {
  try {
    Address.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

function WalletAddress() {
  const showDigits = isMobile ? 10 : 14;
  const pattern = /^[0x]{0,2}[0-9a-fA-F]{0,40}$/;
  const dispatch = useAppDispatch();
  const bridge = useAppSelector((state) => state.bridge);
  const { address, isConnected } = useAccount();
  const tonAddress = useTonAddress();
  const [invalidAddress, setInvalidAddress] = useState(false);

  function truncate(address) {
    return address
      ? `${address.slice(0, showDigits)}...${address.slice(-showDigits)}`
      : "";
  }
  const [destAddress, setDestAddress] = useState(truncate(address));
  const [isChangeVisible, setIsChangeVisivle] = useState(true);

  useEffect(() => {
    if (bridge.receiver && pattern.test(bridge.receiver)) {
      setDestAddress(truncate(bridge.receiver));
      setIsChangeVisivle(true);
    } else if (isValidTonAddress(bridge.receiver)) {
      setDestAddress(truncate(bridge.receiver));
      setIsChangeVisivle(true);
    }
  }, [bridge.receiver]);

  useEffect(() => {
    setInvalidAddress(true);

    if (bridge.toChain !== "TON" && bridge.toChain !== "TONTestnet") {
      setInvalidAddress(pattern.test(destAddress));
    } else {
      setInvalidAddress(true);
      if (isValidTonAddress(bridge.receiver)) {
        setInvalidAddress(false);
      }
    }
  }, [destAddress, bridge.toChain]);

  useEffect(() => {
    if (address && !bridge.receiver) {
      dispatch(setReceiver(address));
    }
    if (tonAddress && !bridge.receiver) {
      // setDestAddress(truncate(tonAddress));
      // dispatch(setReceiver(tonAddress));
    }
  }, [address, tonAddress]);

  function onChangeClickHandle(e) {
    e.preventDefault();
    const inputValue = e.target.value;

    if (bridge.toChain === "TON" || bridge.toChain === "TONTestnet") {
      if (isValidTonAddress(inputValue)) {
        setDestAddress(truncate(inputValue));
        dispatch(setReceiver(inputValue));
      } else {
        setDestAddress(destAddress);
        dispatch(setReceiver(""));
      }
    } else if (pattern.test(inputValue)) {
      setDestAddress(inputValue);
      if (isEvmAddress(inputValue)) {
        setDestAddress(truncate(inputValue));
        dispatch(setReceiver(inputValue));
        setIsChangeVisivle(true);
      }
    } else {
      setDestAddress(destAddress);
      dispatch(setReceiver(""));
    }
  }

  function onChangeClick() {
    setDestAddress("");
    dispatch(setReceiver(""));
    setIsChangeVisivle(false);
  }

  return (
    <>
      {isConnected || tonAddress ? (
        <div className="wallet_Address">
          <div className="inputAddress Disenable">
            <input
              onChange={onChangeClickHandle}
              value={destAddress}
              type="text"
              className={`${invalidAddress && "redBorder"}`}
              placeholder="Paste the receiver address"
              // style={{"textAlign":"center"}}
            />
          </div>
          <button
            className="changeAddress"
            onClick={onChangeClick}
            hidden={!isChangeVisible}
          >
            Change
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default WalletAddress;
