import React from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../components/Footer';
import Cover from '../assets/images/stanbic-cover.png';

import './pages.style.css';

function Stanbic() {
    return ( 
        <div>
            <div className='container pb-4'>
                <h2 className='pageHeading'>STANBIC BANK</h2>
                <p className='pageDescription'>Building personal, business and commercial banking products</p>
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
                <h1 className="large-text">Creating an engaging experience for the mobile banking app using Interaction design</h1>
                <p className="pb-4">The Stanbic Bank project was focused on designing a new super app, encompassing 6 of their modules—My Bank, Mutual Funds, Pensions, Wallet, Insurance, and Stocks—to empower users. The new Appyness app was downloaded by over a million users.</p>
                <p>I worked with the Design team and Front end engineers to create custom loaders, splash screens, Interaction design elements to create a more engaging experience for users while using the banking app, thereby increasing customer engagement, which in turn helped the business grow and increase customer retention. The measures of success was conversion rate, customer satisfaction, engagement and retention.</p>
                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">LOADER, SPLASH SCREEN, VOICE BANKING ANIMATION</h1>
                <h1 className="large-text">Goals:</h1>
                <ul className="pb-4">
                    <li>To create a more engaging experience and increase customer engagement with the app.</li>
                    <li>To create a stronger sense of brand.</li>
                </ul>
                {/* <div className="embed-responsive embed-responsive-16by9">
                    <iframe src="https://drive.google.com/file/d/1tw4WjYLqZV0xyMHLs7JU6k5kjPnhBqhY/preview" width="100%" height="600" allow="autoplay"></iframe>
                </div> */}
            </div>

            <div className="container pt-5">
                <div className="row pb-5 previousBtn">
                    <div className="col-md-6 d-flex mt-3 mt-md-0">
                        <NavLink to='/motion/immersive-lab'>
                            <i className="zmdi zmdi-arrow-left"></i>
                            <span className="fw-400 fs-18 caps">Previous</span>
                        </NavLink>
                    </div>
                    <div className="col-md-6 justify-content-md-end d-flex mt-3 mt-md-0 nextBtn">
                        <NavLink to="/motion/swipe">
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

export default Stanbic;