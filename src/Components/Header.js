import '../App.css';
import Kangaroo1 from '../Images/Kangaroo1.png';
import React from 'react';

function Header() {
    return (
        <div className="Header">
                <img src={Kangaroo1} className='App-logo' alt='logo' />
                <div className="Separar1 bold"><h1> Zoologico de Ismael</h1></div>
        </div>
    );
}

export default Header;
