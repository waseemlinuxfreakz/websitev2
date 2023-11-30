import React from 'react';
import './TokenSwitchButton.css';
import SwitchBtn from '../../../assets/img/Switch-button.svg';
import { useAppSelector, useAppDispatch } from '../../../hooks/storage';
import {setFromToken, setToToken} from '../../../store/swapSlice';

export default function TokenswitchButton() {

    // Global state
    const swap = useAppSelector((state) => state.swap);
    const dispatch = useAppDispatch()

    const handleSwitchButtonClick = () => {
        const fromToken = swap.fromToken;
        const toToken = swap.toToken;
        dispatch(setFromToken(toToken));
        dispatch(setToToken(fromToken));
      };

    return (
        <button className="switchBtn" onClick={handleSwitchButtonClick}>
            <img src={SwitchBtn} alt="Token Switch Button" />
        </button>
    )
}