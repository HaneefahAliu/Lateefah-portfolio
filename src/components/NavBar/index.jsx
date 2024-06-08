import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IKImage, IKContext } from 'imagekitio-react'

import './style.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/">
                <div className='logo'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                        <IKImage path="/logo.png"/>
                    </IKContext>
                </div>
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
                    <NavLink to="/motion/immersive-lab">Motion</NavLink>
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