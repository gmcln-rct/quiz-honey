import React from 'react';
import logo from '../img/quiz-badger-logo.png';

export default function Header() {
    return (
        <>
            <div className="header-section">
                <img src={logo} alt="Honey Badger Institute Logo" className="logo"></img>
                <h2>Honey Badger Institute of Higher Learning</h2>
            </div>
        </>
    );
}