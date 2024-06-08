import React from 'react';
import { NavLink } from 'react-router-dom';
import { IKImage, IKContext } from 'imagekitio-react'

import Footer from '../components/Footer';
import './pages.style.css';

function Bash() {
    return ( 
        <div>
            <div className='container pb-4'>
                <h2 className='pageHeading'>BASH</h2>
                <p className='pageDescription'>Trivia games</p>
            </div>

            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/bash-cover.png"/>
                </IKContext>
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
                <h1 className="large-text">Creating a delightful and engaging experience for users during games</h1>
                <p className="pb-4">Bash is a trivia based game, allowing users to get points and tokens by playing a range of trivia categories, ranking on leaderboards, converting their token wins to payments in their wallet, and then bank withdrawals. </p>
                <p>I worked with the Design team and Front end engineers to create custom loaders, splash screens, animate game elements like icons, and illustrations, to create a delightful and enjoyable experience for users while playing games, thereby increasing customer engagement.</p>
                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">SPLASH SCREEN, LOADERS, SUCCESS SCREEN</h1>
                <h1 className="large-text">Goals:</h1>
                <ul className="pb-4">
                    <li>To create a more engaging experience and increase customer engagement with the app.</li>
                    <li>To create a stronger sense of brand.</li>
                </ul>

                <div className='d-flex justify-content-between pt-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/bash1.gif"/>
                    </IKContext>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/bash2.gif"/>
                    </IKContext>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/bash3.gif"/>
                    </IKContext>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/bash4.gif"/>
                    </IKContext>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row pb-5 previousBtn">
                    <div className="col-md-6 d-flex mt-3 mt-md-0">
                        <NavLink to='/motion/swipe'>
                            <i className="zmdi zmdi-arrow-left"></i>
                            <span className="fw-400 fs-18 caps">Previous</span>
                        </NavLink>
                    </div>
                    <div className="col-md-6 justify-content-md-end d-flex mt-3 mt-md-0 nextBtn">
                        <NavLink to="/motion/showcase">
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

export default Bash;