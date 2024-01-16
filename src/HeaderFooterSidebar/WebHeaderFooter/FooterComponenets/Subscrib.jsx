import React, {useState} from 'react';
import './Subscrib.css';
import { isValidEmail } from '../../../verifiers';

function Subscribe() {

    const [value, setValue] = useState('');

    const handleEmailChange = (e) => {
        e.preventDefault();
        const rawInput = e.target.value;
        const sanitized = rawInput.replace(/[^a-zA-Z0-9@._-]/g, '');
        setValue(sanitized);
    }

    const handleSubscribeClick = () => {
        if(isValidEmail(value)){
            console.log(value, "is a valid email")
        }else{
            console.error(value, "is NOT a valid email")
        }
    }


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
        </div>
    );
}

export default Subscribe;