import React, {useState} from "react";
import './NetworkSwitch.css';

export default function NetworkSwitch() {

    // Local State
    const [mainnetDisabled, setMainnetDisabled] = useState(true);
    const [testnetDisabled, setTestnetDisabled] = useState(false);

    const onMainnetClickHandler = () => {
        setMainnetDisabled(!mainnetDisabled);
        setTestnetDisabled(!testnetDisabled);
    }

    const onTestnetClickHandler = () => {
        setMainnetDisabled(!mainnetDisabled);
        setTestnetDisabled(!testnetDisabled);
    }

    return (
        <div className="toggleSwitch">
            <div
                className={testnetDisabled ? '' : 'active'}
                onClick={onTestnetClickHandler}
            >
                Testnet
            </div>
            <div
                className={mainnetDisabled ? '' : 'active'}
                onClick={onMainnetClickHandler}
            >
                Mainnet
            </div>
        </div>
    )
}