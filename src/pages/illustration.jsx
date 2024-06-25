import React from 'react';
import { IKImage, IKContext } from 'imagekitio-react'

import Footer from '../components/Footer';
import './pages.style.css';

function Illustration() {
    return (
        <div>
            <div className='container'>
                <h1 className='headingText pt-5 pb-4'>Showcase</h1>
            </div>
            <div className='illustrationImages'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/illustration-1.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/illustration-2.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/illustration-3.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/illustration-4.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/illustration-5.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/illustration-6.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/illustration-7.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/illustration-8.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/illustration-9.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/illustration-10.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/illustration-11.png"/>
                </IKContext>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Illustration;