import React from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../components/Footer';
import ImmersiveLab from '../assets/images/IL-cover.png';

import './pages.style.css';

function Motion() {
    return (
        <div>
            <div className='container pb-4'>
                <h2 className='pageHeading'>IMMERSIVE LABS</h2>
                <p className='pageDescription'>Real-time measurement of human cyber capabilities</p>
            </div>

            <img src={ImmersiveLab} />

            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-6">
                        <p className="pageDescription">TEAM</p>
                        <p className="boldText">UX team, Product Manager</p>
                    </div>
                    <div className="col-md-6">
                        <p className="pageDescription">MY ROLE</p>
                        <p className="boldText"> Motion design, Prototyping</p>
                    </div>
                </div>
                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">ABOUT</h1>
                <h1 className="large-text">User explainer videos to create a more engaging sensory experience for users</h1>
                <p className="pb-4">The Immersive lab platform powers the real-time measurement of human cyber capabilities across technical and non-technical teams—any role within the organization, including cyber teams, developers, engineers and executives—all in one platform. This technology is already helping over 300 enterprises around the world, including AirBnB, P&G, Citibank, Sophos and the NHS, while around 5,000 labs are completed every single day.</p>
                <p>I worked on adding motion design elements, particularly explainer videos to create a more engaging experience for users, thereby increasing knowledge retention and customer engagement with learning materials, which in turn helped the business grow and increase customer retention. The measures of success was conversion rate, customer satisfaction, engagement and retention.</p>
                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">EXPLAINER VIDEOS</h1>
                <h1 className="large-text">Goals:</h1>
                <ul className="pb-4">
                    <li>To increase knowledge retention and customer engagement with learning materials, which in turn helps boost achievement and active learning.</li>
                    <li>Using videos creates a more engaging sensory experience for users than using text alone, they can see and hear the concept being explained and can process it in the same way they process everyday interactions.</li>
                    <li>To create a reusable storyboard template for explainer and summary videos.</li>
                </ul>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src="https://drive.google.com/file/d/1tw4WjYLqZV0xyMHLs7JU6k5kjPnhBqhY/preview" width="100%" height="600" allow="autoplay"></iframe>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row pb-5">
                    <div className="col-md-6 d-flex mt-3 mt-md-0 previousBtn grey">
                        <p>
                            <i className="zmdi zmdi-arrow-left"></i>
                            <span className="fw-400 fs-18 caps">Previous</span>
                        </p>
                    </div>
                    <div className="col-md-6 justify-content-md-end d-flex mt-3 mt-md-0 nextBtn">
                        <NavLink to="/motion/stanbic">
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

export default Motion;