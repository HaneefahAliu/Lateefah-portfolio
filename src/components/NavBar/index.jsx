import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import './style.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/">
                <img className='logo' src={Logo} alt="Lateefah's Logo" />
            </Link>
            <div 
                className="menu" 
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/product-design">Product Design</NavLink>
                </li>
                <li>
                    <NavLink to="/illustration">Illustration</NavLink>
                </li>
                <li>
                    <NavLink to="/motion">Motion</NavLink>
                </li>
            </ul>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;