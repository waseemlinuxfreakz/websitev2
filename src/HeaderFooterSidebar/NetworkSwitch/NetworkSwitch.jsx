import React, { useState } from "react";
import './NetworkSwitch.css';

export default function NetworkSwitch() {

    // Global State
    // TODO:

    // Local State
    const [mainnetDisabled, setMainnetDisabled] = useState(true);
    const [testnetDisabled, setTestnetDisabled] = useState(false);

    const onClickHandler = () => {
        setMainnetDisabled(!mainnetDisabled);
        setTestnetDisabled(!testnetDisabled);
    }

    return (
        <>
            {
                /* <div className="toggleSwitch">
                    <div
                        className={testnetDisabled ? '' : 'active'}
                        onClick={onClickHandler}
                    >
                        Testnet
                    </div>
                    <div
                        className={mainnetDisabled ? '' : 'active'}
                        onClick={onClickHandler}
                    >
                        Mainnet
                    </div> 
                </div>
                */
            }

        </>
    )
}