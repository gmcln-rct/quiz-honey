import React from 'react';
import logo from '../img/quiz-badger-logo.png';

export default function Header() {
    return (
        <>
            <div className="logo-section">
                <img src={logo} alt="Honey Badger Institute Logo" className="logo"></img>
            </div>
        </>
    );
}