import React from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../components/Footer';
import Cover from '../assets/images/bash-cover.png';
import gif1 from '../assets/gifs/iphone-12--black.gif'
import gif2 from '../assets/gifs/showcase2.gif'
import gif3 from '../assets/gifs/showcase3.gif'
import gif4 from '../assets/gifs/showcase4.gif'

import './pages.style.css';

function Showcase() {
    return ( 
        <div>
            <div className='container pb-4'>
                <h2 className='pageHeading'>SHOWCASE</h2>
                <p className='pageDescription'>Splash screens</p>

                <div className='d-flex justify-content-between pt-5'>
                    <img src={gif1} />
                    <img src={gif2} />
                    <img src={gif3} />
                    <img src={gif4} />
                </div>
            </div>

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
                <h1 className="large-text">Creating moments of delights to increasing customer engagement  </h1>
                <p className="pb-4">A selection of other projects I worked on to create splash screens, these include Matador - a real estate development app, Buddie - a children’s finance learning app, eazyBanking - a banking app, and Foodish - a food delivery app. </p>
                <p>I worked with the Design team and Front end engineers to design and implement custom splash screens, to create a more engaging experience for users while using these apps, thereby increasing customer engagement.</p>
            </div>

            <div className="container pt-5">
                <div className="row pb-5 previousBtn">
                    <div className="col-md-6 d-flex mt-3 mt-md-0">
                        <NavLink to='/motion/bash'>
                            <i className="zmdi zmdi-arrow-left"></i>
                            <span className="fw-400 fs-18 caps">Previous</span>
                        </NavLink>
                    </div>
                    <div className="col-md-6 justify-content-md-end d-flex mt-3 mt-md-0 nextBtn grey">
                        <p>
                            <span>Next</span>
                            <i className="zmdi zmdi-arrow-right"></i>
                        </p>
                    </div>
                </div>
            </div>

            <div className='pt-5'>
                <Footer />
            </div>
        </div>
    )
}

export default Showcase;
