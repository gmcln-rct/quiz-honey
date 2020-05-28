import React from 'react';
import logo from '../img/quiz-badger-logo.png';

export default function Logo() {
    return (
        <>
            <div className="logo-section">
                <img src={logo} alt="Honey Badger Institute Logo" className="logo"></img>
                <h3>Can you please The Badger?</h3>
            </div>
        </>
    );
}