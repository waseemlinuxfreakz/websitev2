import React from 'react';
import "./TokenSelectors.css";
import TokenswitchButton from './TokenSwitchButton';
import TokenSelectorBox from './TokenSelectorBox'

export default function TokenSelectors () {
    return (<div class="payReciveContainer">
        <TokenSelectorBox 
            type="from"
        />
        <TokenswitchButton />
        <TokenSelectorBox 
            type="to"
        />
    </div>)
}