import React from 'react';
import logo from '../img/quiz-badger-logo.png';

export default function Logo() {
    return (
        <>
            <div className="logo-section">
                <img src={logo} alt="Honey Badger Institute Logo" alt="Honey Badger Institute of Higher Learning Logo" aria-label="Honey Badger Institute of Higher Learning Logo" className="logo"></img>
                <h3>Can you please <span id="nowrap">The Badger?</span></h3>
            </div>
        </>
    );
}