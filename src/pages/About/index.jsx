import React from 'react';

import Lateefah from '../../assets/images/Lateefah.png';
import about from '../../assets/images/about.png';

import './style.css';

const About = () => {
    return (
        <div className='container px-5 py-5'>
            <div className='row'>
                <div className='col-md-8 pt-6'>
                    <h1>Hi</h1>
                    <p>My name is Lateefah Aliu, I’m a Nigerian User experience designer currently living in <span>Lagos,</span> Birmingham.</p>
                    <p>As a child, I dreamed of becoming a pilot, I was deeply fascinated about how all the moving parts worked, but this changed in 2009 when I took an introductory computer science course and one of the softwares thought was Corel draw, this was my first contact with design. </p>
                    <p>Fast foward 13 years later, I have  gone on to earn a master's degree in the field. Through the exploration of different aspects of product development, including <span>front-end development,</span> Illustrations, Motion design, 3D modelling and Product design, my passion for breaking down the world around me into its individual components and understanding how they fit together has led me to become highly skilled in buillding design systems, and frameworks that simplify complex business problems into compelling ecosystems that provide great experiences for users. </p>
                    <p>I have been fortunate enough to define business opportunities and work with multi-disciplinary teams that solve global, customer-facing challenges for companies in Africa and Europe. I had the privilege to design products and services across finance, healthcare, education and e-commerce.</p>
                    <p>When I’m not working, I can be found gallery hopping, travelling, painting, taking pictures or learning how to fly a plane.</p>
                </div>
                <div className='col-md-3'>
                    <img src={Lateefah} />
                </div>
            </div>

            <div>
                <h1>Beyond work, I love to collect vintage items, travel, take pictures, and learn new things.</h1>
                <img src={about} />
            </div>
        </div>
    )
}

export default About;