import React from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../components/Footer';
import './pages.style.css';

import Cover from '../assets/images/CC-cover.png';
import CC1 from '../assets/images/CC-1.png'
import CC2 from '../assets/images/CC2.png'
import CC3 from '../assets/images/CC3.png'
import CC4 from '../assets/images/CC4.png'
import CC5 from '../assets/images/CC5.png'
import CC6 from '../assets/images/CC6.png'
import CC7 from '../assets/images/CC7.png'
import CC8 from '../assets/images/CC8.png'
import CC9 from '../assets/images/CC9.png'
import CC10 from '../assets/images/CC10.png'
import CC11 from '../assets/images/CC11.png'
import CC12 from '../assets/images/CC12.png'
import CC13 from '../assets/images/CC13.png'
import gif1 from '../assets/gifs/cc1.gif'
import gif2 from '../assets/gifs/cc2.gif'
import gif3 from '../assets/gifs/cc3.gif'
import gif4 from '../assets/gifs/cc4.gif'

const CancerCare = () => {
    return (
        <div className='pt-5'>
            <div className='container'>
                <h2 className='pageHeading'>CANCER CARE</h2>
                <p className='pageDescription'>Health management solution for Cancer</p>
            </div>

            <img className="pb-5" src={Cover} />

            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <p className="fs-18 light">TIMELINE</p>
                        <p className="fs-18">2 months</p>
                    </div>
                    <div className="col-md-5">
                        <p className="fs-18 light">TOOLS</p>
                        <p className="fs-18">Pen and Paper, Figma, Optimal Sort, Maze</p>
                    </div>
                    <div className="col-md-5">
                        <p className="fs-18 light">MY ROLE</p>
                        <p className="fs-18">User research, Visual Design, Information Architecture, Interaction Design, Prototyping, Testing</p>
                    </div>
                </div>

                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">PROBLEM</h1>
                <h1 className="large-text">Newly diagnosed patients become overwhelmed trying to keep track of complex information and processes.</h1>
                <p className="pb-5">These complex treatment process can be difficult to maintain and could lead to problems like inconsistent drug use, missing appointments or not being able to give proper information about symptoms severity to their doctors leading to misdiagnosis. This led to the question - <b>How can people be equipped with a tool that would help them manage their health better?</b></p>

                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">THE SOLUTION</h1>
                <h1 className="large-text">Making health management easy</h1>

                <div className="pt-5 small-width">
                    <div className="d-flex justify-content-between pb-5">
                        <div className="">
                            <h1 className="groupHead">Medications, Appointments & Vitals at a glance</h1>
                            <ul>
                                <li>Track and manage daily medication,  upcoming appointments, and tracked vitals at a glance. </li>
                                <li>Can view and log medications to be used through the day.</li>
                                <li>Users can log their body vitals. </li>
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
                            <h1 className="groupHead">Simple dashboard</h1>
                            <ul>
                                <li>Users can add medications and upcoming appointments</li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between pb-5">
                        <div className="">
                            <h1 className="groupHead">Read Articles</h1>
                            <ul>
                                <li>Users can get credible information, read and save articles.</li>
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
                            <h1 className="groupHead">Share Reports</h1>
                            <ul>
                                <li>Users can view and compare weekly or monthly reports of their tracked vitals and symptoms.</li>
                                <li>Ability to share reports with their doctor or cregiver.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-bottom"></div>
            </div>

            <div>
                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">THE APPROACH</h1>
                </div>

                <img src={CC1} />

                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">COMPETITIVE ANALYSIS</h1>
                    <h1 className="large-text">Analyzing the problem space and current solutions</h1>
                    <p className="pb-3">I analyzed 3 applications around health management, brreaking down and analyzing the directions they’ve taken, to identify what worked, and things that didn’t. Taking the successes from this application as well as some <b>Donald Norman’s principles i.e Visibility, Affordance, and Consistency,</b> I was able define the principle that would guide our design approach.</p>
                    <img className='pb-3' src={CC2} />

                    <div className="border-bottom"></div>
                </div>
            </div>

            <div>
                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">USER INTERVIEWS</h1>
                    <h1 className="large-text">“...its ability to provide information, which would not be available otherwise.”</h1>
                    <p className="pb-3">I conducted 5 user interviews, to find trends on why and how they use health anagement apps. The data was analyzed into an affinity map to help build personas, scenarios, journey map, and further inform the design decision.</p>

                    <p>RESEARCH QUESTIONS:</p>
                    <ol>
                        <li>What digital solution to manage your health?</li>
                        <li>What motivated you to use one of these solutions?</li>
                        <li>Can you describe your experience with using these solutions?</li>
                        <li>Walk me through the process of using these applications?</li>
                        <li>What are the most important features for you?</li>
                        <li>What difficlties do you experience using these applications?</li>
                    </ol>
                </div>

                <img src={CC3} />

                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">MAIN INSIGHTS</h1>
                    <h1 className="large-text">“...mHealth applications can improve aspects of symptom control in patients with cancer”*</h1>
                    <p className="pb-3 subtitle-text">*Osborn, J., Ajakaiye, A., Cooksley, T. et al. Do mHealth applications improve clinical outcomes of patients with cancer? A critical appraisal of the peer-reviewed literature. Support Care Cancer 28, 1469–1479 (2020). https://doi.org/10.1007/s00520-019-04945-4</p>
                    <p>Based on the trends from the affinity map and grouping similar notes, I recognized that users were generally interested in a convenient, efficient and automated way to manage and report multiple aspects of their health.</p>

                    <div className='d-flex justify-content-between'>
                        <div className='theme-card'>
                            <h2>THEME 1: Reminders</h2>
                            <ul>
                                <li>Reminders take away the need to have to constantly check the time.</li>
                                <li>Convinience of push notifications are great.</li>
                            </ul>
                        </div>
                        <div className='theme-card'>
                            <h2>THEME 2: Information</h2>
                            <ul>
                                <li>People value personalized and tailored information</li>
                                <li>Ability to also share information on health directly with doctors was important.</li>
                            </ul>
                        </div>
                        <div className='theme-card'>
                            <h2>THEME 3: Tracking</h2>
                            <ul>
                                <li>Can track daily activity and view at a glance.</li>
                                <li>Can review progress with tracked data.</li>
                                <li>Goal setting in combination with tracking will help improve discipline.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-bottom"></div>
                </div>
            </div>

            <div>
                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription pb-5">PERSONAS + EMPATHY MAPS</h1>
                    <p className="pb-3">Based on the insights and observations from the research, I created 3 personas that captured the users, their goals and motivation. I also formed empathy maps to understand their needs and frustrations.</p>
                </div>

                <img src={CC4} />

                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription pb-5">INFORMATION ARCHITECTURE & JOURNEY MAP</h1>
                    <p className="pb-3">I organized an online Card sort session with 6 participants to observe patterns and language they used, to determine the best way to organize and categorize the features. Also, using the personas and empathy maps, I made the journey map highlighting the pain points and the oppurtunities for improvement.</p>
                </div>

                <img src={CC5} />

                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">DESIGN</h1>
                    <h1 className="large-text">I did some initial sketches to do some quick investigations and get feedback early on</h1>
                    <p className="pb-3">Using the research findings, I explored 2 design ideas to find the best approach to the solution. I started with some initial sketches to do some quick investigation of what would work. </p>
                </div>

                <img src={CC6} />

                <div className='container'>
                    <p className="pt-5">I conducted an heuristic evaluation and peer review sessions with 2 professors of HCI and 4 HCI Master’s students to test the two ideas. I moved forward with the second idea.</p>
                </div>

                <img src={CC7} />

                <div className='container'>
                    <p className="pageDescription pt-5">VISUAL DESIGN</p>
                </div>

                <img src={CC8} />

                <div className='container'>
                    <p className="pt-5">The design style was focused on communicating a friendly, mordern and legible tone as CancerCare will be used by users of all ages. The friendly design allows users feel connected to the product which would makes it easier for them to keep using the product to enhance their every day lives. The vibrant illustrations combined with texts on the cards helps older users alongside people with visual impairments or non-native english speakers understand what each element does.</p>
                </div>

                <div className="border-bottom"></div>
            </div>

            <div>
                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">TESTING + ITERATIONS</h1>
                    <h1 className="large-text">3 improvements to the design</h1>
                    <p className="pb-3">I conducted user tests with 10 participants, using a combination of the Think-aloud protocol and the Remote usability testing methods. The key things to be evaluated were the Usability, Findability, Learnability of the application. The participants were asked to perform these tasks: Add Medication, Record body vitals, Record mood and symptoms, Read an article, Add appointment.</p>
                    <p>I conducted the test sessions using Maze which automated the collection of task completion times, user’s paths, heat maps, misclick rates so a combination of these and the SUS form participants completed at the end of the session formed the quantitative data.</p>
                </div>

                <img className='pb-3' src={CC9} />

                <div className='container'>
                    <div className='d-flex justify-content-between testing-card pt-5'>
                        <img src={CC10} />
                        <div>
                            <p className='boldText'>Simplified visuals</p>
                            <ul>
                                <li>I explored some other ideas of how to better visualize the medication and appointments sections for easier understanding.</li>
                            </ul>

                            <p className='boldText'>Providing “Shortcuts”</p>
                            <ul>
                                <li>Added the ability to add medications and appointments straight from the homepage, this would help to reduce number of clicks, and increase findability.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between testing-card'>
                        <div>
                            <p className='boldText'>More information</p>
                            <ul>
                                <li>Added details on dosage and time to use drugs when you tap on a medication to log on the homepage.</li>
                                <li>Action buttons added to call doctor or open up the address on the map to the appointment popup. </li>
                                <li>Full details off medication pops up when a drug is tapped on so you can quickly look through it and go back without going to a different page.</li>
                            </ul>
                        </div>
                        <img src={CC11} />
                    </div>

                    <div className='d-flex justify-content-between testing-card'>
                        <img src={CC12} />
                        <div>
                            <p className='boldText'>Larger icons and texts</p>
                            <ul>
                                <li>Increased the size of texts and icons on cards for better legibility.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-bottom"></div>
                </div>
            </div>

            <div>
                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">FINAL SCREENS</h1>
                    <h1 className="large-text">The solution</h1>
                    <img src={CC13} />
                    <p className='pageDescription pt-5'>Link to full prototype <a href="about.html" className="text-link">here</a></p>

                    <div className="border-bottom"></div>
                </div>
            </div>

            <div>
                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">CONCLUSION + REFLECTIONS</h1>
                    <h1 className="large-text">What I’ve learnt on this project</h1>
                    <p className="pb-3">This was my first master’s project, and it was a great learning experience as this was the first time I worked end to end on a design project from problem definition, research, prototyping, visual design and finally front-end development. Some of the things I learnt:</p>
                    <ul>
                        <li><b>Continuous feedback:</b> Being able to work with colleageus on my course to get peer review as well as feedback from my module leads every step of the way was very helpful in getting mistakes detected early on, making corrections and getting to the final solution.</li>
                        <li>Creating sketches, wireframes, and paper prototype, helped to properly visualize as well as get feedback early on; this helped me save a lot of time and resources in the long run.</li>
                        <li>With more time, I would have worked on more design assets like: an Onboarding screen, A walk through guide for new users. Also add features like: Chat function with doctors, Ability to add a caregiver to monitor patient’s activities.</li>
                        <li>Another step would be to test with more users and gather more feedback based on actual use in day to day environments, and re-iterate the product to suit the needs of the users. A constant re-iteration process and and development would be implemented.</li>
                    </ul>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row pb-5 previousBtn">
                    <div className="col-md-6 d-flex mt-3 mt-md-0">
                        <NavLink to='/product-design/immersive-lab'>
                            <i className="zmdi zmdi-arrow-left"></i>
                            <span className="fw-400 fs-18 caps">Previous</span>
                        </NavLink>
                    </div>
                    <div className="col-md-6 justify-content-md-end d-flex mt-3 mt-md-0 nextBtn">
                        <NavLink to="/product-design/voice-it">
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

export default CancerCare;