import React from 'react';
import { NavLink } from 'react-router-dom';
import { IKImage, IKContext } from 'imagekitio-react'

import Footer from '../components/Footer';
import './pages.style.css';

const GameBoard = () => {
    return (
        <div className='pt-5'>
            <div className='container'>
                <h2 className='pageHeading'>GAME BOARD</h2>
                <p className='pageDescription'>Investigating accessibility challenges in games</p>
            </div>

            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/GB-cover.png"/>
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
                        <p className="fs-18">Pen and Paper, Adobe XD</p>
                    </div>
                    <div className="col-md-4">
                        <p className="fs-18 light">MY ROLE</p>
                        <p className="fs-18">User research, Visual Design,  Interaction Design, Accessibility, Prototyping, Testing</p>
                    </div>
                </div>

                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">PROBLEM</h1>
                <h1 className="large-text">People with disabilities are not fully considered when designing games.</h1>
                <p className="pb-2">As the adoption of games increases today it is clear that it is not made for just a fixed category of people and should be made with considerations for everyone. However, it is clear that people with disabilities are not fully considered when designing them and in more recent times, they are considered as an afterthought. Millions of people live with conditions that can affect their cognitive, visual, motor, or auditory functions but this shouldn’t limit them from getting access to or playing games. Making certain “small” accessibility choices available suddenly opens these games up to an even larger audience and more inclusive to disabled users.</p>

                <div className="border-bottom"></div>
            </div>

            <div>
                <div className='container pt-5'>
                    <h1 className="pageDescription pb-3">PERSONAS</h1>
                    <p>Based on the insights and observations from the research, I created 4 personas that captured the users, their core needs, frustrations and technology proficieny. </p>
                </div>

                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/GB1.png"/>
                </IKContext>

                <div className='container pt-5'>
                    <h1 className="pageDescription pb-3">DESIGN</h1>
                    <h1 className="large-text">I did some initial sketches to do some quick investigations and get feedback early on</h1>
                    <p>Using the research findings, I explored 2 design ideas to find the best approach to the solution. I started with some initial sketches to do some quick investigation of what would work. </p>
                </div>

                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/GB2.png"/>
                </IKContext>

                <div className='container pt-5'>
                    <h1 className="pageDescription pb-3">GUIDELINES</h1>
                    <h1 className="large-text">Following WCAG Guidelines</h1>

                    <p>AHMED - PARKINSON’S DISEASE</p>
                    <ul>
                        <li>All elements on screen i.e buttons, texts e.t.c have a minimum target size of 44 by 44 px (WCAG, 2.5.5) which makes sure every element can be clicked easily.</li>
                    </ul>

                    <p>LUCY - BLURRY VISION</p>
                    <ul>
                        <li>It was important to add text alternatives for all images on the screen so it’s readable (WCAG, 1.1). </li>
                        <li>Users can increase texts on screen up to 200% without losing content or functionality allowing them to find an appropriate size that works perfectly for them (WCAG, 1.4.4). </li>
                        <li>Also, poor contrast between elements on screen makes it difficult for content to be seen or understood and it was ensured that texts and interactive elements have a color contrast ratio of at least 4.5:1. </li>
                        <li>Throughout the application, instructions for performing actions such as buttons or links were designed so they didn't have to rely solely on sensory characteristics such as shape or color, also every button had an icon as well as a label to describe its function (WCAG, 1.3.3). </li>
                        <li>In games, colors are used very often as “bad” or “good” indicators and to represent different players or tokens. This can be a challenge for color-blind users who can’t see specific colors(Red, Green, and Blue), an option was added to the settings menu to allow users to select a different color mode based on the type of colorblindness they had, allowing the application to change the colors into a more suitable color for people with that type of colorblindness.</li>
                    </ul>

                    <p>TED - SENSORIAL HEARING</p>
                    <ul>
                        <li>A lot of captions in games are not very accessible and little work has been done in this area and there are no specific guidelines to follow. </li>
                        <li>However, captions and subtitles are similar and are generally represented in the same way. Bodies like the BBC and Netflix have studied and provided recommendations for optimal subtitles to ensure they are accessible to all users, and they can be transferred to this context for captioning.</li>
                        <li>The (BBC subtitle guideline, 3.1) has recommended that each line of a subtitle has 37 - 42 characters and only two lines are shown on the screen at any particular time (BBC subtitle guideline, 3.3). </li>
                        <li>It is also recommended to aim to leave a subtitle on screen for a minimum period of around 0.3 seconds per word (BBC subtitle guideline, 4.1). </li>
                    </ul>

                    <p>CAROL - ALZHEIMERS</p>
                    <ul>
                        <li>The (WCAG, 1.3) recommends designing content that can be presented in different ways without losing information or structure. Here, a simple layout that can be turned on in the settings, that allows users to use the application without animations and less information on the screen was designed. </li>
                        <li>Following (WCAG, 2.4.2), each page has a title that describes what it is for so users are aware of where they currently are. </li>
                        <li>The layout and navigation of the application are kept consistent through all pages in the same relative order (WCAG, 3.2.3). This helps users become comfortable so they can predict where to find things on each page.</li>
                    </ul>

                    <div className="border-bottom"></div>
                </div>
            </div>

            <div>
                <div className='container pt-5'>
                    <h1 className="pageDescription pb-3">VISUAL DESIGN</h1>
                </div>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/GB3.png"/>
                </IKContext>
                <div className='container pt-5'>
                    <p>The design style was focused onbeing accessible, in line with this a non-decorative and simple font “Manrope” was used which is legible but still fun enough to fit into the game aesthetic. o ensure all the colors are distinguishable, a Palette with colors that are unambiguous both to colorblind and non-colorblind users (Okabe, 2008) was explored. Furthermore, a color blindness simulator application Sim Daltonism (Sim Daltonism, 2020) was used to look at the design from the perspective of a colorblind person. </p>
                    <div className="border-bottom"></div>
                </div>
            </div>

            <div className='container pt-5'>
                <h1 className="pageDescription">TESTING + ITERATIONS</h1>
                <h1 className="large-text">“... changing the color mode based on color blindness type is a nice add on, but it really just feels like changing the theme of the app.</h1>
                <p>Using a combination of the Think-aloud protocol and the Remote usability testing methods, I conducted user tests with 6 participants, 2 participants had experience with using the Voice Control feature, 3 participants had used closed captioning while watching videos at some point, 1 participant had visual impairment myopia and wears glasses.The key things to be evaluated were the Usability, Findability, Accessibility of the application. </p>
            
                <div className='d-flex justify-content-between'>
                    <div className='testing-card'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/GB4.png"/>
                </IKContext>
                    </div>
                    <div>
                        <h1 className="groupHead">Redoing the Color adjustment </h1>
                        <ul>
                            <li>I explored some other ideas of how to better implement the color settings.</li>
                            <li>I updated the design to allow users select and replace the Red, Green, Yellow, and Blue with colors of their choice that fit their preference and is unambiguous. </li>
                            <li>This ensured that each user had a color palette that worked well with their particular color deficiencies and didn’t just look like a filter had been put over the application. </li>
                        </ul>
                    </div>
                </div>

                <div className="border-bottom"></div>
            </div>

            <div className='container pt-5'>
                <h1 className="pageDescription">FINAL SCREENS</h1>
                <h1 className="large-text">The solution</h1>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/GB5.png"/>
                </IKContext>
                <div className="border-bottom"></div>

                <h1 className="pageDescription pt-5">MULTI-PLATFORM ACCESSIBILITY</h1>
                <h1 className="large-text">Mobile</h1>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/GB6.png"/>
                </IKContext>
                <h1 className="large-text pt-5">Tablet</h1>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/GB7.png"/>
                </IKContext>
                <div className="border-bottom"></div>
            </div>

            <div>
                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">CONCLUSION + REFLECTIONS</h1>
                    <h1 className="large-text">What I’ve learnt on this project</h1>
                    <p>After the evaluation, it was observed that users found the app easy to use and they were able to achieve their goals after a short period of using it. If there was more time available, the next step would be to test with more users and gather more feedback based on actual use in day to day environments, and re-iterate the product to suit the needs of the users. A constant re-iteration process and and development would be implemented.</p>
                    <p>By creating sketches, wireframes, and paper prototype, helped to properly visualize as well as get feedback early on; this helped me save a lot of time and resources in the long run. Also, working with and following established guidelines like WCAG and BBC from the start of the project, helped in finding optimal techniques to achieve the main aim, making the application accessible.</p>
                    <p>Collaborating with a developer would help to better understand the possibilities of the product, and validate feasibility.</p>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row pb-5 previousBtn">
                    <div className="col-md-6 d-flex mt-3 mt-md-0">
                        <NavLink to='/product-design/homely'>
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

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default GameBoard;