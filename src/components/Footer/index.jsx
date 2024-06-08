import React from 'react';

import './style.css';

const Footer = () => {
    const navigationLinks = [
        { href: '/product-design', text: 'Product Design' },
        { href: '/illustration', text: 'Illustrations' },
        { href: '/motion', text: 'Motion' },
        { href: '/about', text: 'About' },
        { href: '/contact', text: 'Contact' },
    ];

    return (
        <div className='footer'>
            <div className='container'>
                <div className='row links'>
                    <div className='col-6'>
                        <h1 className='heading'>Let's work together!</h1>
                        <div className='btn'>
                            <a className='btnOutline' href='mailto:larhtyfarh@gmail.com'>Email me</a>
                            <a className='btnFilled' target='_blank' href='https://docs.google.com/document/d/1Bl-OgL0saYx16f6gLf3IsH8eejHOEK6JBfAQZvQVz3E/edit'>Download Resume</a>
                        </div>
                    </div>

                    <div className='col-2'>
                    <p className='groupHeading'>Explore</p>
                        <div>
                            <div className="navigation-link">
                                {navigationLinks.map((link) => (
                                    <p key={link.href}>
                                        <a href={link.href}>{link.text}</a>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='col-2'>
                        <p className='groupHeading'>Digital Design</p>
                        <div>
                            <p className='groupItem'>Design Systems</p>
                            <p className='groupItem'>Illustrations</p>
                            <p className='groupItem'>Motion Design</p>
                            <p className='groupItem'>3D Modelling</p>
                        </div>
                    </div>

                    <div className='col-2'>
                        <p className='groupHeading'>User Experience</p>
                        <div>
                            <p className='groupItem'>Research</p>
                            <p className='groupItem'>User Testing</p>
                            <p className='groupItem'>Prototyping</p>
                            <p className='groupItem'>Accessibility</p>
                            <p className='groupItem'>Information Architecture</p>
                        </div>
                    </div>
                </div>

                <div className=' d-flex justify-content-between'>
                    <p className='groupItem'>Lateefah Aliu - 2024®</p>
                    <div className='social'>
                        <a target='_blank' href='https://www.linkedin.com/in/lateefahaliu' >Linkedin</a>
                        <a target='_blank' href='https://dribbble.com/Larhtyfarh' >Dribbble</a>
                        <a target='_blank' href='https://instagram.com/larhtyfarhart' >Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;






