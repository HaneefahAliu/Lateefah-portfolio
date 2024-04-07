import React from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../components/Footer';
import './pages.style.css';

import Cover from '../assets/images/Homely-cover.png'
import H1 from '../assets/images/H1.png'
import H2 from '../assets/images/H2.png'
import H3 from '../assets/images/H3.png'
import H4 from '../assets/images/H4.png'
import H5 from '../assets/images/H5.png'
import H6 from '../assets/images/H6.png'
import H7 from '../assets/images/H7.png'
import gif1 from '../assets/gifs/homely1.gif'
import gif2 from '../assets/gifs/homely2.gif'
import gif3 from '../assets/gifs/homely3.gif'
import gif4 from '../assets/gifs/homely4.gif'
import gif5 from '../assets/gifs/homely5.gif'
import gif6 from '../assets/gifs/homely6.gif'
import gif7 from '../assets/gifs/homely7.gif'
import gif8 from '../assets/gifs/homely8.gif'
import gif9 from '../assets/gifs/homely9.gif'
import gif10 from '../assets/gifs/homely10.gif'

const VoiceIt = () => {
    return (
        <div className='pt-5'>
            <div className='container'>
                <h2 className='pageHeading'>HOMELY</h2>
                <p className='pageDescription'>Bridging the gaps in facility management</p>
            </div>

            <img className="pb-5" src={Cover} />

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p className="fs-18 light">TIMELINE</p>
                        <p className="fs-18">6 weeks</p>
                    </div>
                    <div className="col-md-4">
                        <p className="fs-18 light">TOOLS</p>
                        <p className="fs-18">Pen and Paper, Figma</p>
                    </div>
                    <div className="col-md-4">
                        <p className="fs-18 light">MY ROLE</p>
                        <p className="fs-18">Visual Design, Information Architecture, Interaction Design, Prototyping</p>
                    </div>
                </div>

                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">PROBLEM</h1>
                <h1 className="large-text">Software solutions available for residential communities are not designed for users.</h1>
                <p className="pb-2">There are no apps on the market that automate everything a resident needs in a house in one app. There’s a need for an app that combines facility management with fanatic user welfare, automating all the major inconviniences of living in an apartment for residents.</p>

                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription pb-5">THE SOLUTION - MOBILE APP</h1>

                <div className="d-flex justify-content-between pb-5">
                    <div className="">
                        <h1 className="groupHead"> Simple Onboarding</h1>
                        <ul>
                            <li>Simple and clear step-by-step onboarding process for first time users.</li>
                            <li>Important to guide users to ensure they grasp the full scope of the application.</li>
                        </ul>
                    </div>
                    <div className="small-gif">
                        <img src={gif1} />
                    </div>
                </div>

                <div className="d-flex justify-content-between pb-5">
                    <div className="small-gif">
                        <img src={gif2} />
                    </div>
                    <div className="">
                        <h1 className="groupHead">Dashboard</h1>
                        <ul>
                            <li>Provide residents with quick access to the most important features from the homepage.</li>
                            <li>Most recent notices and messages can be seen in the message section.</li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="">
                        <h1 className="groupHead">Emergencies, Security and Maintenance</h1>
                        <ul>
                            <li>Big red button centered on the screen makes it easy to access in case of emergencies.</li>
                            <li>In line with end-to-end automation, residents can make maintenance requests, create visistor passes or contact the gate.</li>
                        </ul>
                    </div>
                    <div className="small-gif">
                        <img src={gif3} />
                    </div>
                </div>

                <div className="d-flex justify-content-between pb-5">
                    <div className="small-gif">
                        <img src={gif4} />
                    </div>
                    <div className="">
                        <h1 className="groupHead">Wallet</h1>
                        <ul>
                            <li>A global overview of current balance, transactions performed.</li>
                            <li>Residents are able to fund their account, and withdraw to a bank of their choice.</li>
                            <li>A detailed report to help users analyze and track their spendings. </li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex justify-content-between pb-5">
                    <div className="">
                        <h1 className="groupHead">Shop for convinience with ease</h1>
                        <ul>
                            <li>Residents can search for, add items to their cart, checkout and track their orders progress and status from the Store.</li>
                            <li>Utiliities can be paid for directly from the app.</li>
                        </ul>
                    </div>
                    <div className="small-gif">
                        <img src={gif5} />
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="small-gif">
                        <img src={gif6} />
                    </div>
                    <div className="">
                        <h1 className="groupHead">Profile management</h1>
                        <ul>
                            <li>First profile created in an household is the admin, and they can view and add other memebers to their household.</li>
                            <li>Can see a log of all the visitors pass created for their household.</li>
                        </ul>
                    </div>
                </div>

                <div className="border-bottom"></div>
            </div>

            <div>
                <div className='container pt-5'>
                    <h1 className="pageDescription">THE SOLUTION -  MARKETING WEBSITE</h1>
                    <h1 className="large-text">Support the launch of the mobile application; providing information about Homely</h1>
                    <img src={gif7} />

                    <div className="border-bottom"></div>
                </div>

                <div className='container pt-5'>
                    <h1 className="pageDescription">THE SOLUTION -  RESIDENT</h1>
                    <h1 className="large-text">For the occassional user that prefers accessing the tool from their browser.</h1>
                    <img src={gif8} />

                    <div className="border-bottom"></div>
                </div>

                <div className='container pt-5'>
                    <h1 className="pageDescription">THE SOLUTION -  COMMUNITY MANAGER</h1>
                    <h1 className="large-text">Creating and maintaining profiles for houses, residents, gates, emergencies, cars and visistors.</h1>
                    <img src={gif9} />

                    <div className="border-bottom"></div>
                </div>

                <div className='container pt-5'>
                    <h1 className="pageDescription">THE SOLUTION -  HOMELY ADMIN</h1>
                    <h1 className="large-text">Overseeing portal to manage community manager profiles and stores.</h1>
                    <img src={gif10} />

                    <div className="border-bottom"></div>
                </div>
            </div>

            <div>
                <div className='container pt-5'>
                    <h1 className="pageDescription">THE APPROACH</h1>
                </div>
                <img src={H1} />

                <div className='container pt-5'>
                    <h1 className="pageDescription">UNDERSTANDING THE PROBLEM</h1>
                </div>
                <img src={H2} />

                <div className='container'>
                    <div className="border-bottom"></div>

                    <h1 className="pageDescription pt-5">COMPETITIVE ANALYSIS</h1>
                    <h1 className="large-text">Competitors had little to no focus on the resident experience.</h1>
                    <p>I analyzed the 3 of the most popular facility management apps in the market. I found that they had little to no focus on the resident aspect and focused more on the estate management as a whole. I also looked at some indirect competitiors like utility suppliers - Gas on the Go, BuyPower. This became an oppurtunity for a solution.</p>
                    <img className='pt-5' src={H3} />
                    <h1 className="pageDescription pt-5">MAIN INSIGHTS</h1>
                </div>

                <img className='pt-4' src={H4} />

                <div className='container'>
                    <div className="border-bottom"></div>

                    <h1 className="pageDescription pt-5">INFORMATION ARCHITECTURE</h1>
                    <p className='pt-3'>I organized an online Card sort session with 6 participants to observe patterns and language they used, to determine the best way to organize and categorize the features. Also, using the personas and empathy maps, I made the journey map highlighting the pain points and the oppurtunities for improvement.</p>
                    <img className='pt-5' src={H5} />

                    <h1 className="pageDescription pt-5">DESIGN</h1>
                    <h1 className="large-text">I did some initial sketches to do some quick investigations and get feedback early on</h1>
                    <p>Using the research findings, I explored design ideas to find the best approach to the solution. I started with some initial sketches to do some quick investigation of what would work. </p>
                </div>

                <img className='pt-3' src={H6} />
            </div>

            <div>
                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">FINAL SCREENS</h1>
                    <h1 className="large-text">The solution</h1>
                    <img src={H7} />
                    <p className='pageDescription pt-5'>Link to full prototype <a href="about.html" className="text-link">here</a></p>

                    <div className="border-bottom"></div>
                </div>
            </div>

            <div>
                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">REFLECTIONS</h1>
                    <h1 className="large-text">What I’ve learnt on this project</h1>
                    <p className="pb-3">I started out as a self taught designer, and this was one of my first client projects. It was great learning experience as it was my first time working with other stakeholders to dissect a problem and find a solution. Looking back athe project, there are a couple of thing I’d do different, these are some of the thing I learnt: </p>
                    <ul>
                        <li>Better research: I would have insisted on doing more user interviews to properly understand the target audience and get more accurate information on painpoints and needs.</li>
                        <li>User Tests: At the end of the design phase, I would have conducted usability tests with users to validate the design choices and solution, so I can iterate upon them. this was not done at the time as the client wanted to complete the development phase first, however unfortunately I’d left the project at the time. </li>
                        <li>I would have done more in the discovery phase like explorng more ideas, empathy maps, personas and journey maps to be able to empathize with the users better. </li>
                    </ul>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row pb-5 previousBtn">
                    <div className="col-md-6 d-flex mt-3 mt-md-0">
                        <NavLink to='/product-design/voice-it'>
                            <i className="zmdi zmdi-arrow-left"></i>
                            <span className="fw-400 fs-18 caps">Previous</span>
                        </NavLink>
                    </div>
                    <div className="col-md-6 justify-content-md-end d-flex mt-3 mt-md-0 nextBtn">
                        <NavLink to="/product-design/game-board">
                            <span>Next</span>
                            <i className="zmdi zmdi-arrow-right ml-3 fs-18"></i>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default VoiceIt;