import React from 'react';

function Contact() {
    return (
        <div className='fullwidth'>
            <div className="container pt-5">
                <div className="text-center contact-group">
                    <p className="fs-18">Contact me</p>
                    <a href="mailto:larhtyfarh@gmail.com">larhtyfarh@gmail.com</a>
                </div>

                <div className="social-group text-center">
                    <p className="fs-18">Social</p>
                    <a className="pr-5" href="https://dribbble.com/Larhtyfarh" target="_blank"><i class="zmdi zmdi-dribbble"></i></a>
                    <a className="pr-5" href="https://www.linkedin.com/in/lateefahaliu" target="_blank"><i class="zmdi zmdi-linkedin-box"></i></a>
                    <a className="pr-5" href="https://www.instagram.com/lateefahaliu/" target="_blank" ><i class="zmdi zmdi-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}


export default Contact;