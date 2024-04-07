import React from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../components/Footer';
import Cover from '../assets/images/swipe-cover.png';
import gif1 from '../assets/gifs/Payment 1.gif'
import gif2 from '../assets/gifs/PaymentFailed 1.gif'
import gif3 from '../assets/gifs/Send1 1.gif'
import gif4 from '../assets/gifs/Send 1.gif'
import gif5 from '../assets/gifs/wallet 1.gif'
import gif6 from '../assets/gifs/Save 1.gif'
import gif7 from '../assets/gifs/empty 1.gif'
import gif8 from '../assets/gifs/done 1.gif'


import './pages.style.css';

function Swipe() {
    return ( 
        <div>
            <div className='container pb-4'>
                <h2 className='pageHeading'>SWIPE MAX</h2>
                <p className='pageDescription'>Software design and engineering house</p>
            </div>

            <img src={Cover} />

            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-6">
                        <p className="pageDescription">TEAM</p>
                        <p className="boldText">Design team, Front-end engineers</p>
                    </div>
                    <div className="col-md-6">
                        <p className="pageDescription">MY ROLE</p>
                        <p className="boldText">Motion design, Prototyping</p>
                    </div>
                </div>
                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">ABOUT</h1>
                <h1 className="large-text">Using motion design to create moments of delights to increasing customer engagement  </h1>
                <p className="pb-4">Swipe is an all-in-one software design and engineering house that is committed to delivering compelling solutions, catering for various digital needs across Africa. The SwipeMax project was to create a credit facilitating solution for users to access buy now pay later services in Nigeria.</p>
                <p>I worked with the Design team and Front end engineers to create custom loaders, splash screens, and email campaign animations to create a more engaging experience for users while using the credit app, thereby increasing customer engagement.</p>
                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">EMAIL CAMPAIGN</h1>
                <h1 className="large-text">Goals:</h1>
                <ul className="pb-4">
                    <li>To create a stronger sense of brand and a connection between the product and users.</li>
                    <li>To create a more engaging experience and increase customer engagement with the email.</li>
                </ul>
                <div className='row gifCard'>
                    <div className='col-md-6 pb-5'>
                        <img src={gif1} />
                    </div>
                    <div className='col-md-6 pb-5'>
                        <img src={gif2} />
                    </div>
                    <div className='col-md-6 pb-5'>
                        <img src={gif3} />
                    </div>
                    <div className='col-md-6 pb-5'>
                        <img src={gif4} />
                    </div>
                    <div className='col-md-6 pb-5'>
                        <img src={gif5} />
                    </div>
                    <div className='col-md-6 pb-5'>
                        <img src={gif6} />
                    </div>
                    <div className='col-md-6 pb-5'>
                        <img src={gif7} />
                    </div>
                    <div className='col-md-6 pb-5'>
                        <img src={gif8} />
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row pb-5 previousBtn">
                    <div className="col-md-6 d-flex mt-3 mt-md-0">
                        <NavLink to='/motion/stanbic'>
                            <i className="zmdi zmdi-arrow-left"></i>
                            <span className="fw-400 fs-18 caps">Previous</span>
                        </NavLink>
                    </div>
                    <div className="col-md-6 justify-content-md-end d-flex mt-3 mt-md-0 nextBtn">
                        <NavLink to="/motion/bash">
                            <span>Next</span>
                            <i className="zmdi zmdi-arrow-right ml-3 fs-18"></i>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className='pt-5'>
                <Footer />
            </div>
        </div>
    )
}

export default Swipe;