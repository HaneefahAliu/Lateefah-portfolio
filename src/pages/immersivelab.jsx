import React from 'react';

import './pages.style.css';

import Footer from '../components/Footer';

import Cover from '../assets/images/IL-cover.png';
import image1 from '../assets/images/IL1.png';
import image2 from '../assets/images/IL2.png';
import image3 from '../assets/images/IL3.png';
import image4 from '../assets/images/IL4.png';
import image5 from '../assets/images/IL5.png';
import image6 from '../assets/images/IL6.png';

const ImmersiveLab = () => {
    return (
        <div className='pt-5'>
            <div className='container'>
                <h2 className='pageHeading'>IMMERSIVE LABS</h2>
                <p className='pageDescription'>Real-time measurement of human cyber capabilities</p>
            </div>

            <img className="pb-5" src={Cover} />

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="pageDescription">TEAM</p>
                        <p className="fs-18">UX team, Product Manager, Engineers</p>
                    </div>
                    <div className="col-md-6">
                        <p className="pageDescriptiont">MY ROLE</p>
                        <p className="fs-18">Visual Design, Interaction Design, Motion design, Prototyping</p>
                    </div>
                </div>

                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">ABOUT</h1>
                <h1 className="large-text">Creating a stronger sense of brand while maintaining a high level of  accessibility and functionality.</h1>
                <p className="pb-4">The Immersive lab platform powers the real-time measurement of human cyber capabilities across technical and non-technical teams—any role within the organization, including cyber teams, developers, engineers and executives—all in one platform. This technology is already helping over 300 enterprises around the world, including AirBnB, P&G, Citibank, Sophos and the NHS, while around 5,000 labs are completed every single day.</p>
                <p>I worked with the UX team to redesign the platform, thereby improving the user experience of the platform, which in turn helped the business grow and increase customer retention. The measures of success was conversion rate, customer satisfaction, engagement and retention.</p>

                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">UI STYLE GUIDE REDESIGN</h1>
                <h1 className="large-text">Goals:</h1>

                <ul className="pb-4">
                    <li>To create a stronger sense of brand and a connection between the platform and the marketing sites. </li>
                    <li>To define how color is used across the platform and the marketing site.</li>
                    <li>To give colors a role and set some rules around them (color hierarchy).</li>
                    <li>Identify a method that help us to select the shades of colors based on accessibility and functionality.</li>
                </ul>

                <img className="pb-4" src={image1} />
                <img className="pb-4" src={image2} />
                <img className="pb-4" src={image3} />
                <img className="pb-4" src={image4} />

                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">MODAL REDESIGN</h1>
                <h1 className="large-text">Goals</h1>

                <ul className="pb-4">
                    <li>Give users a sense of completion, or moment of delight which could potentially lead to more engagement.</li>
                    <li>To create a family of modals to use when a user completes a process, define a pattern of behaviour by establishing consistent user interaction to help users learn when they have completed a process.</li>
                    <li>To investigate and document where the success modal currently appears in the platform, define the rule of behaviour; when it should appear, map where in the platform they should be used according to the rule.</li>
                </ul>

                <img src={image5} />
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src="https://drive.google.com/file/d/1EW0x_aiE6uOV4saavbY1PmanDzK9rQjA/preview" width="100%" height="600" allow="autoplay"></iframe>
                </div>

                <div className="border-bottom"></div>
            </div>
            
            <div className="container pt-5">
                <h1 className="pageDescription">ASSET LIBRARY</h1>
                <h1 className="large-text">Goals</h1>

                <ul className="pb-4">
                    <li>Research shows that combining facts with images, people are more likely to understand and remember the material, which would enhance understanding. </li>
                    <li>To create a library of commonly used assets and environments for a consistent look accross all assets.</li>
                    <li> To create a color palette and define how color is used in scenario asset creation.</li>
                </ul>
                <img src={image6} />

                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">EXPLAINER VIDEOS</h1>
                <h1 className="large-text">Goals:</h1>
                <ul className="pb-4">
                    <li>Using videos creates a more engaging sensory experience for users than using text alone, they can see and hear the concept being explained and can process it in the same way they process everyday interactions.</li>
                    <li>To increase knowledge retention and customer engagement with learning materials, which in turn helps boost achievement and active learning.</li>
                    <li>To create a reusable storyboard template for explainer and summary videos.</li>
                </ul>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src="https://drive.google.com/file/d/1tw4WjYLqZV0xyMHLs7JU6k5kjPnhBqhY/preview" width="100%" height="600" allow="autoplay"></iframe>
                </div>

                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">REFLECTIONS</h1>
                <h1 className="large-text">What I’ve learnt so far...</h1>
                <p className='pb-3'>This was my first job after my masters program and working on these projects was a great experience and way to apply theoretical knowledge in real projects. . Some of the things I learnt:</p>
                
                <ul className="pb-5">
                    <li>Learning how to manage each stakeholder and handling tradeoffs as each stakeholder has a different goal and point of view.</li>
                    <li>Working closely with a developer right from the exploration stage was great as I was able to identify what designs would be feasible and identify any possible constraints.</li>
                    <li>As some of these weren’t tested with Users at this point, It was helpful to work with other members of the UX team as they provided feedback and suggestions through critic sessions.</li>
                </ul>

                <div className="pb-5">
                    <p className='pageDescription'>View marketing website <a href="about.html" className="text-link">here</a></p>
                    <p className='pageDescription'>View platform demo <a href="about.html" className="text-link">here</a></p>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row pb-5">
                    <div className="col-md-6 d-flex mt-3 mt-md-0">
                        <p>
                            <i className="zmdi zmdi-arrow-left mr-3 fs-18"></i>
                            <span className="fw-400 fs-18 caps">Previous</span>
                        </p>
                    </div>
                    <div className="col-md-6 justify-content-md-end d-flex mt-3 mt-md-0">
                        <a href="./">
                            <span className="switchBtn">Next</span>
                            <i className="zmdi zmdi-arrow-right ml-3 fs-18"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>


    )
}

export default ImmersiveLab;