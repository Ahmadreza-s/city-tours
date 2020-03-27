import React from 'react';
import {ReactComponent as Logo} from '../../assets/img/logo.svg';
import './Navbar.scss';
import {NavLink} from 'react-router-dom';

const navbar = () => {
    return (
        <nav className='navbar'>
            <Logo/>
            <ul className="nav-links">
                <li className='nav-link'>
                    <NavLink activeClassName='active' exact to={'/home'}>
                        Home
                    </NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink activeClassName='active' exact to={'/about'}>
                        About
                    </NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink activeClassName='active' exact to={'/tours'}>
                        Tours
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default navbar;