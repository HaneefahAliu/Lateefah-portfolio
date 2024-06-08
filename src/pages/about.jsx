import React from 'react';
import { IKImage, IKContext } from 'imagekitio-react'

import './pages.style.css';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <div className='container px-5 py-5'>
                <div className='d-flex justify-content-between aboutCard'>
                    <div className='col-md-7 pt-6'>
                        <h1 className='aboutHeading'>Hi!</h1>
                        <p className='aboutBody'>My name is Lateefah Aliu, I’m a Nigerian User experience designer currently living in <span>Lagos,</span> Birmingham.</p>
                        <p className='aboutBody'>As a child, I dreamed of becoming a pilot, I was deeply fascinated about how all the moving parts worked, but this changed in 2009 when I took an introductory computer science course and one of the softwares thought was Corel draw, this was my first contact with design. </p>
                        <p className='aboutBody'>Fast foward 13 years later, I have  gone on to earn a master's degree in the field. Through the exploration of different aspects of product development, including <span>front-end development,</span> Illustrations, Motion design, 3D modelling and Product design, my passion for breaking down the world around me into its individual components and understanding how they fit together has led me to become highly skilled in buillding design systems, and frameworks that simplify complex business problems into compelling ecosystems that provide great experiences for users. </p>
                        <p className='aboutBody'>I have been fortunate enough to define business opportunities and work with multi-disciplinary teams that solve global, customer-facing challenges for companies in Africa and Europe. I had the privilege to design products and services across finance, healthcare, education and e-commerce.</p>
                        <p className='aboutBody'>When I’m not working, I can be found gallery hopping, travelling, painting, taking pictures or learning how to fly a plane.</p>
                        <div className="pt-2 d-flex socialIcons">
                            <a className="" href="mailto:larhtyfarh@gmail.com" target="_blank"><i class="zmdi zmdi-email fs-24"></i></a>
                            <a className="" href=" https://dribbble.com/Larhtyfarh" target="_blank"><i class="zmdi zmdi-dribbble fs-24"></i></a>
                            <a className="" href="https://www.linkedin.com/in/lateefahaliu" target="_blank"><i class="zmdi zmdi-linkedin-box fs-24"></i></a>
                            <a className="" href=" https://instagram.com/larhtyfarhart" target="_blank"><i class="zmdi zmdi-instagram fs-24"></i></a>
                            <a className="" href="https://docs.google.com/document/d/1Bl-OgL0saYx16f6gLf3IsH8eejHOEK6JBfAQZvQVz3E/edit" target="_blank">Resume</a>
                        </div>
                    </div>
                    <div className='col-md-4 aboutImg'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                        <IKImage path="/Lateefah.png"/>
                    </IKContext>
                    </div>
                </div>

                <div>

                </div>

                <h1 className='pt-5'>Beyond work, I love to collect vintage items, travel, take pictures, and learn new things.</h1>
            </div>

            <div className='px-5 pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/about.png"/>
                </IKContext>
            </div>

            <div className='pt-5'>
                <Footer />
            </div>
        </div>
    )
}

export default About;