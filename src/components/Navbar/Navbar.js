import React from 'react';
import {ReactComponent as Logo} from '../../assets/img/logo.svg';
import './Navbar.scss';

const navbar = () => {
    return (
        <nav className='navbar'>
            <Logo/>
            <ul className="nav-links">
                <li>
                    <a href="/" className='nav-link'>
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className='nav-link'>
                        About
                    </a>
                </li>
                <li>
                    <a href="/" className='nav-link active'>
                        Tours
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default navbar;