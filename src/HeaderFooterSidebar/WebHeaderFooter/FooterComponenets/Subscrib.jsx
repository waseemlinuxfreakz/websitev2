import React, { useEffect, useState } from 'react';
import './Subscrib.css';
import { isValidEmail } from '../../../verifiers';
import useSignup from '../../../hooks/useSignup';

function Subscribe() {

    const { send, success, error } = useSignup();
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [messageVisible, setMessageVisible] = useState(false);

    const handleEmailChange = (e) => {
        e.preventDefault();
        const rawInput = e.target.value;
        const sanitized = rawInput.replace(/[^a-zA-Z0-9@._-]/g, '');
        setValue(sanitized);
        if (isValidEmail(sanitized) || sanitized == '') {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    const handleSubscribeClick = () => {
        if (isValidEmail(value)) {
            setIsValid(true);
            send(value);
        } else {
            setIsValid(false);
        }
    }

    useEffect(() => {
        if (success || error) {
            // Show a message
            setMessageVisible(true);

            setTimeout(() => {
                setMessageVisible(false);
                setValue('')
                // 6000 milliseconds = 6 seconds
            }, 6000);
        }
    }, [success, error]);



    return (
        <div className="subscribBox">
            <h2>Sign up for our newsletter and join the growing EMMET community</h2>
            <form action="#" className="subscribForm">
                <input
                    type="email"
                    placeholder='Email'
                    onChange={e => handleEmailChange(e)}
                    value={value}
                />
                <button
                    type='button'
                    onClick={handleSubscribeClick}
                >
                    Subscribe
                </button>
            </form>
            {!isValid && <span style={{ "color": "red", "textAlign": "center" }}>Invalid email: {value}</span>}
            {messageVisible && (success
                ? <span style={{ "color": "green", "textAlign": "center" }}>Email successfully added</span>
                : <span style={{ "color": "red", "textAlign": "center" }}>Email has not been added</span>)}
        </div>
    );
}

export default Subscribe;