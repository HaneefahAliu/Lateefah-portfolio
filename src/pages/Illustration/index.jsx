import React from 'react';

import Footer from '../../components/Footer';
import './style.css';

import illustration1 from '../../assets/images/illustration-1.png';
import illustration2 from '../../assets/images/illustration-2.png';
import illustration3 from '../../assets/images/illustration-3.png';
import illustration4 from '../../assets/images/illustration-4.png';
import illustration5 from '../../assets/images/illustration-5.png';
import illustration6 from '../../assets/images/illustration-6.png';
import illustration7 from '../../assets/images/illustration-7.png';
import illustration8 from '../../assets/images/illustration-8.png';
import illustration9 from '../../assets/images/illustration-9.png';
import illustration10 from '../../assets/images/Illustration-10.png';
import illustration11 from '../../assets/images/Illustration-11.png';

function Illustration() {
    return (
        <div>
            <div className='container'>
                <h1 className='headingText'>Showcase</h1>
            </div>
            <div>
                <img className='illustrationImg' src={illustration1} />
                <img className='illustrationImg' src={illustration2} />
                <img className='illustrationImg' src={illustration3} />
                <img className='illustrationImg' src={illustration4} />
                <img className='illustrationImg' src={illustration5} />
                <img className='illustrationImg' src={illustration6} />
                <img className='illustrationImg' src={illustration7} />
                <img className='illustrationImg' src={illustration8} />
                <img className='illustrationImg' src={illustration9} />
                <img className='illustrationImg' src={illustration10} />
                <img className='illustrationImg' src={illustration11} />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Illustration;