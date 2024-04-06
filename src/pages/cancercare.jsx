import React from 'react';

import './pages.style.css';

import Footer from '../components/Footer';

import Cover from '../assets/images/CC-cover.png';

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

                <div className="pt-5">
                    <div className="row pb-5 px-5">
                        <div className="col-md-6">
                            <h1 className="groupHead">Medications, Appointments & Vitals at a glance</h1>
                            <ul>
                                <li>Track and manage daily medication,  upcoming appointments, and tracked vitals at a glance. </li>
                                <li>Can view and log medications to be used through the day.</li>
                                <li>Users can log their body vitals. </li>
                            </ul>
                        </div>
                        <div className="col-md-6 embed-responsive embed-responsive-16by9">
                            <iframe src="https://drive.google.com/file/d/1D4gXqRTjZx3BX-71pzEiCoe9xB0SHi0m/preview" width="700" height="400" allow="autoplay"></iframe>
                        </div>
                    </div>
                    
                    <div className="row pb-5 px-5">
                        <div className="col-md-6 embed-responsive embed-responsive-16by9">
                            <iframe src="https://drive.google.com/file/d/1hJE0kc839294owcPE3eaBTRKbEHLFFWV/preview" width="700" height="480" allow="autoplay"></iframe>
                        </div>
                        <div className="col-md-6">
                            <h1 className="groupHead">Simple dashboard</h1>
                            <ul>
                                <li>Users can add medications and upcoming appointments</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row pb-5 px-5">
                        <div className="col-md-6">
                            <h1 className="groupHead">Read Articles</h1>
                            <ul>
                                <li>Users can get credible information, read and save articles.</li>
                            </ul>
                        </div>
                        <div className="col-md-6 embed-responsive embed-responsive-16by9">
                            <iframe src="https://drive.google.com/file/d/1X3jvAs3Alw75HFXtERh7nE68N9oqnU_O/preview" width="640" height="480" allow="autoplay"></iframe>
                        </div>
                    </div>

                    <div className="row pb-5 px-5">
                        <div className="col-md-6 embed-responsive embed-responsive-16by9">
                            <iframe src="https://drive.google.com/file/d/1KDyl_wCFmu_fj5FoEV3CAfPcXA0XIeVH/preview" width="640" height="480" allow="autoplay"></iframe>
                        </div>
                        <div className="col-md-6">
                            <h1 className="groupHead">Share Reports</h1>
                            <ul>
                                <li>Users can view and compare weekly or monthly reports of their tracked vitals and symptoms.</li>
                                <li>Ability to share reports with their doctor or cregiver.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-bottom"></div>

                <div>
                    <div className='container'>
                        <hw> Thios od os container</hw>
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