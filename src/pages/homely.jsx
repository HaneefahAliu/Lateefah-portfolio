import React from 'react';
import { NavLink } from 'react-router-dom';
import { IKImage, IKContext } from 'imagekitio-react'

import Footer from '../components/Footer';
import './pages.style.css';

const VoiceIt = () => {
    return (
        <div className='pt-5'>
            <div className='container'>
                <h2 className='pageHeading'>HOMELY</h2>
                <p className='pageDescription'>Bridging the gaps in facility management</p>
            </div>

            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/Homely-cover.png"/>
                </IKContext>
            </div>

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
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/homely1.gif"/>
                    </IKContext>
                    </div>
                </div>

                <div className="d-flex justify-content-between pb-5">
                    <div className="small-gif">
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/homely2.gif"/>
                    </IKContext>
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
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/homely3.gif"/>
                    </IKContext>
                    </div>
                </div>

                <div className="d-flex justify-content-between pb-5">
                    <div className="small-gif">
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/homely4.gif"/>
                    </IKContext>
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
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/homely5.gif"/>
                    </IKContext>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="small-gif">
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/homely6.gif"/>
                    </IKContext>
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
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/homely7.gif"/>
                    </IKContext>

                    <div className="border-bottom"></div>
                </div>

                <div className='container pt-5'>
                    <h1 className="pageDescription">THE SOLUTION -  RESIDENT</h1>
                    <h1 className="large-text">For the occassional user that prefers accessing the tool from their browser.</h1>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/homely8.gif"/>
                    </IKContext>

                    <div className="border-bottom"></div>
                </div>

                <div className='container pt-5'>
                    <h1 className="pageDescription">THE SOLUTION -  COMMUNITY MANAGER</h1>
                    <h1 className="large-text">Creating and maintaining profiles for houses, residents, gates, emergencies, cars and visistors.</h1>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/homely9.gif"/>
                    </IKContext>

                    <div className="border-bottom"></div>
                </div>

                <div className='container pt-5'>
                    <h1 className="pageDescription">THE SOLUTION -  HOMELY ADMIN</h1>
                    <h1 className="large-text">Overseeing portal to manage community manager profiles and stores.</h1>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/gifs/">
                        <IKImage path="/homely10.gif"/>
                    </IKContext>

                    <div className="border-bottom"></div>
                </div>
            </div>

            <div>
                <div className='container pt-5'>
                    <h1 className="pageDescription">THE APPROACH</h1>
                </div>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/H1.png"/>
                </IKContext>

                <div className='container pt-5'>
                    <h1 className="pageDescription">UNDERSTANDING THE PROBLEM</h1>
                </div>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/H2.png"/>
                </IKContext>

                <div className='container'>
                    <div className="border-bottom"></div>

                    <h1 className="pageDescription pt-5">COMPETITIVE ANALYSIS</h1>
                    <h1 className="large-text">Competitors had little to no focus on the resident experience.</h1>
                    <p>I analyzed the 3 of the most popular facility management apps in the market. I found that they had little to no focus on the resident aspect and focused more on the estate management as a whole. I also looked at some indirect competitiors like utility suppliers - Gas on the Go, BuyPower. This became an oppurtunity for a solution.</p>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/H3.png"/>
                </IKContext>
                    <h1 className="pageDescription pt-5">MAIN INSIGHTS</h1>
                </div>

                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/H4.png"/>
                </IKContext>

                <div className='container'>
                    <div className="border-bottom"></div>

                    <h1 className="pageDescription pt-5">INFORMATION ARCHITECTURE</h1>
                    <p className='pt-3'>I organized an online Card sort session with 6 participants to observe patterns and language they used, to determine the best way to organize and categorize the features. Also, using the personas and empathy maps, I made the journey map highlighting the pain points and the oppurtunities for improvement.</p>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/H5.png"/>
                </IKContext>

                    <h1 className="pageDescription pt-5">DESIGN</h1>
                    <h1 className="large-text">I did some initial sketches to do some quick investigations and get feedback early on</h1>
                    <p>Using the research findings, I explored design ideas to find the best approach to the solution. I started with some initial sketches to do some quick investigation of what would work. </p>
                </div>

                <div className='pt-3'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/H6.png"/>
                </IKContext>
                </div>
            </div>

            <div>
                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">FINAL SCREENS</h1>
                    <h1 className="large-text">The solution</h1>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/H7.png"/>
                </IKContext>
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