import React from 'react';
import { NavLink } from 'react-router-dom';
import { IKImage, IKContext } from 'imagekitio-react'

import Footer from '../components/Footer';
import './pages.style.css';

const VoiceIt = () => {
    return (
        <div className='pt-5'>
            <div className='container'>
                <h2 className='pageHeading'>VOICE IT</h2>
                <p className='pageDescription'>Voice Interaction techniques for product designers.</p>
            </div>

            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                    <IKImage path="/VI-cover.png"/>
                </IKContext>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p className="fs-18 light">TIMELINE</p>
                        <p className="fs-18">2 months</p>
                    </div>
                    <div className="col-md-4">
                        <p className="fs-18 light">TOOLS</p>
                        <p className="fs-18">Pen and Paper, Adobe XD</p>
                    </div>
                    <div className="col-md-4">
                        <p className="fs-18 light">MY ROLE</p>
                        <p className="fs-18">User research, Visual Design, Interaction Design, Prototyping, Testing</p>
                    </div>
                </div>

                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">PROBLEM</h1>
                <h1 className="large-text">How speech Interaction as an input method can be used to used to support design work.</h1>
                <p className="pb-2">Automatic speech recognition systems (ASR) have been applied in a range of different fields, however, there has been limited research on how speech interaction as an input method can support design work. This sparked the question - <b>How can voice-driven commands be used to control graphical user interfaces of creative software to support designers with physical disabilities or motor impairment.</b></p>

                <div className="border-bottom"></div>
            </div>

            <div className="container pt-5">
                <h1 className="pageDescription">THE SOLUTION</h1>
                <h1 className="large-text pb-5">Explored 3 different approaches to speech input for the proposed interface.</h1>

                <div className="row pb-5">
                    <div className="testing-card col-md-6">
                        <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                            <IKImage path="/VI1.png"/>
                        </IKContext>
                    </div>
                    <div className="col-md-4">
                        <h1 className="groupHead">Grid</h1>
                        <ul>
                            <li>This was implemented by showing gridlines on the selected item along with numbers for each horizontal and vertical line.</li>
                            <li>A user can issue a command to resize an item by increasing or reducing its width and height to fit into the grid numbers issued. </li>
                        </ul>
                    </div>
                </div>

                <div className="row pb-5">
                    <div className="col-md-4">
                        <h1 className="groupHead">Descriptive</h1>
                        <ul>
                            <li>This approach allowed users  “describe” what they want to be done to the system. </li>
                            <li>The command followed the line of “Resize”, followed by “bigger” or “smaller” depending on the task then a percentage they wanted the shape’s width and height resized to.</li>
                        </ul>
                    </div>
                    <div className="testing-card col-md-6">
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                            <IKImage path="/VI2.png"/>
                        </IKContext>
                    </div>
                </div>

                <div className="row">
                    <div className="testing-card col-md-6">
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                            <IKImage path="/VI3.png"/>
                        </IKContext>
                    </div>
                    <div className="col-md-4">
                        <h1 className="groupHead">Continuous</h1>
                        <ul>
                            <li>The continuous approach is somewhat similar to the descriptive method.</li>
                            <li> However, it is unique as it follows a continuous text input either "larger" or "smaller", and only stops the command when the user says “Stop”.</li>
                        </ul>
                    </div>
                </div>

                <div className="border-bottom"></div>
            </div>

            <div>
                <div className='container pt-5'>
                    <h1 className="pageDescription">THE APPROACH</h1>
                </div>

                <div className="pb-4">
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                            <IKImage path="/VI4.png"/>
                        </IKContext>
                        </div>

                <div className='container pt-5'>
                    <h1 className="pageDescription">WHITE PAPER RESEARCH</h1>
                    <h1 className="large-text">Limited work that focused on speech interaction for product design work.</h1>
                    <p>Starting with white paper research, I drew from research papers and journals on the topic of speech interaction techniques, highlighting it’s applications, successes and limitations. From this I recognized several other systems and tools exist to aid art creation, but none fully focused on speech interaction for product design work. </p>
                
                    <div className="border-bottom"></div>
                </div>

                <div className='container pt-5'>
                    <h1 className="pageDescription">USER INTERVIEWS - INITIAL STUDY</h1>
                    <h1 className="large-text">“...Yes, I’d use one, especially if it’s at least 98% accurate.”</h1>
                    <p className='pb-3'>I conducted interviews with 8 product designers, I asked the participants the questions below to find trends in their use of creative/design softwares, their experience with speech interaction systems , as well as their ideal suggestions for a speech interaction system, then I organized the data through affinity mapping.</p>
                    <p className=''>RESEARCH QUESTIONS:</p>
                    <ol>
                        <li>Experience level using creative softwares?</li>
                        <li>What are some of the design or creative applications you use?</li>
                        <li>Can you describe your experience with using these applications?</li>
                        <li>What are the sucesses of these applications?</li>
                        <li>What are the most frustrating parts of using these applications?</li>
                        <li>Have you created any workarounds to help overcome these painpoints? If yes, what are they?</li>
                        <li>If you could fix these applicaations, what would you change?</li>
                        <li>Have you used any speech recognition systems? What do you think about them?</li>
                        <li>What are the appealing features or successes of speech recognition systems?</li>
                        <li>What is the biggest painpoint related to using speech recognition?</li>
                        <li>Assuming you are unable to access a mouse and keyboards setup. How would you navigate a user interface's layout using speech only?</li>
                        <li>Can you see yourself using a speech based design/creative application?</li>
                    </ol>
                </div>

                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                            <IKImage path="/VI5.png"/>
                        </IKContext>

                <div className='container pt-5'>
                    <h1 className="pageDescription">MAIN INSIGHTS</h1>
                    <h1 className="large-text">Keeping commands short and direct to reduce issues associated with speech recognition.</h1>
                    <p className='pb-3'>Based on the themes, I recognized that users were generally open to using a speech based design software, however were a bit skeptical due to some problems asscoiated with speech recognition.</p>

                    <div className='d-flex justify-content-between'>
                        <div className='theme-card'>
                            <h2>THEME 1: Ease of use</h2>
                            <ul>
                                <li>Ability to use any design software after a short period. </li>
                                <li>Different softwares, but similar features, controls and layout</li>
                            </ul>
                        </div>
                        <div className='theme-card'>
                            <h2>THEME 2: Help or tips</h2>
                            <ul>
                                <li>Limited help or tips in software for onboarding.</li>
                                <li>Have to rely on youtube or other sites for tutorials or help</li>
                            </ul>
                        </div>
                        <div className='theme-card'>
                            <h2>THEME 3: Speech recognition</h2>
                            <ul>
                                <li>Difficulty recognizing accents, punctuation and context.</li>
                                <li>Keep commands short to reduce possible errors.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-bottom"></div>
                </div>
            </div>

            <div>
                <div className='container pt-5'>
                    <h1 className="pageDescription">DESIGN</h1>
                    <h1 className="large-text">Implemented the Grid, Descriptive, and Continuous approach using Adobe XD’s voice prototyping feature.</h1>
                    <p className='pb-3'>I explored 3 different approaches: Grid, Descriptive, Continuous to speech interaction for the proposed interface. I then designed and implemented the interface using details that were adopted from other creative applications and user requirements from the Initial study. The design was implemented and tested using AdobeXD’s voice prototyping feature, which used Speech Recognition that provided the system with the ability to recognize voice or speech input and perform the appropriate action. </p>
                </div>

                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                            <IKImage path="/VI6.png"/>
                        </IKContext>

                <div className='container pt-5'>
                    <h1 className="pageDescription">TESTING + HYPOTHESIS</h1>
                    <h1 className="large-text">I think users would prefer the descriptive approach because it follows the pattern of everyday speech</h1>
                    <p>I conducted a series of user studies with 20 participants; 10 female, 10 male in two groups of product designers and non-product designers, to evaluate and collect initial feedback as well as qualitative data (Preference, learnability, suggestions) and quantitative data (completion time, success rate) from users. These approaches were presented to the participants in an A/B testing form so they could compare and select their preferred approach. I asked the participants to perform the following tasks:</p>
                    <p>
                        <br/>Task 1: Resize circles in the BGCirle layer to half their size 
                        <br/>Task 2: Resize items in the SkipIcon layer to twice their size 
                        <br/>Task 3: Resize items in the SentenceText layer to half their size 
                        <br/>Task 4: Resize items in the Images layer to half their size 
                        <br/>Task 5: Resize items in the PhraseText layer to twice their size 
                        <br/>Task 6: Resize items in the Background layer to twice their size
                    </p>

                    <div className="border-bottom"></div>
                </div>
            </div>

            <div>
                <div className='container pt-5'>
                    <h1 className="pageDescription">RESULTS + IMPROVEMENTS</h1>
                    <h1 className="large-text">Found from data that the descriptive and continuous approach were preferred as it provided a more humanoid feel.</h1>
                    <p className='pb-3'>From the results and suggestions participants had offered during the evaluation, several observations can be drawn:</p>
                    <ul>
                        <li>It was observed that the participants learned to perform the resizing tasks comfortably after an average of 2 tasks. </li>
                        <li>There was no significant difference in task completion times or the learning curve, so it can be deduced that there is no significant difference in the learnability of the system between both groups.</li>
                        <li>The descriptive and continuous approach were rated above the grid approach as the designers explained that it provided a more humanoid feel and seemed as if they were not just only giving instructions but also engaging in conversations with the computer.</li>
                        <li>With regards to the preference of the artists for the three approaches, the overarching selection of the continuous approach revealed that speech recognition software would be most useful if it is designed in a way that would ensure simplicity, specificity, and ease of use.</li>
                    </ul>
                    <p>Based on the feedback I continually iterated the design tomake some improvements:</p>

                    <div className="row pt-5">
                        <div className="col-md-4">
                            <h1 className="groupHead">Grid: Need for clarity</h1>
                            <ul>
                                <li>A need for clarity in the grid approach, providing users with an option to select if they want to resize the object larger or smaller first before the grid shows up, allows the interface to only show the necessary grid lines. </li>
                                <li>Gridlines are sometimes unclear or not visible when a smaller object is selected, an option to zoom in to them or just make the lines and numbers bolder would make it better.</li>
                            </ul>
                        </div>
                        <div className="testing-card col-md-6">
                        <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                            <IKImage path="/VI7.png"/>
                        </IKContext>
                        </div>
                    </div>

                    <div className="row">
                        <div className="testing-card col-md-6">
                        <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                            <IKImage path="/VI8.png"/>
                        </IKContext>
                        </div>
                        <div className="col-md-4">
                            <h1 className="groupHead">Descriptive: Shorter Commands</h1>
                            <ul>
                                <li>Making the commands shorter, as it currently requires a long string of commands to perform the resize action. “It can get a bit confusing when using the descriptive approach, as you have to say four to five words at a time to perform an action”.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-md-4">
                            <h1 className="groupHead">Continuous: Adding metrics around border</h1>
                            <ul>
                                <li>Showing the metrics in the continuous approach, that is the width and height of an object would make this approach significantly better. Adding the width and height size around the border of the object as it changes size can help to show what size it currently is and you can better tell when to stop.</li>
                            </ul>
                        </div>
                        <div className="testing-card col-md-6">
                        <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                            <IKImage path="/VI9.png"/>
                        </IKContext>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">FINAL SCREENS</h1>
                    <h1 className="large-text">The solution</h1>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Lateefah/">
                            <IKImage path="/VI10.png"/>
                        </IKContext>
                    <p className='pageDescription pt-5'>Link to full prototype <a href="about.html" className="text-link">here</a></p>

                    <div className="border-bottom"></div>
                </div>
            </div>

            <div>
                <div className='container pt-5 pb-4'>
                    <h1 className="pageDescription">CONCLUSION + REFLECTIONS</h1>
                    <h1 className="large-text">What I’ve learnt on this project</h1>
                    <p className="pb-3">Speech interaction is not new, but it’s use in design softwares is limited. I was able to accomplish the main aim I set ou to achive; exploring and validating speech interaction as an approach to product design to support physically impaired designers. However, there are a few things, I’d note:</p>
                    <p>Testing with target audience: As this was intended to focus on accessibility and it’s potential to support designers with physical disabilities or motor impairment, Participants with motor impairments should be recruited to test and analyze the proposed system.</p>
                    <p>Better tools: Without time constraints, I’d take this into the development phase to fully grasp the feasibility and limitations of the solution, as wireframes and prototyping as good a they might be can only do so much. I would also explore other forms of interaction as this focused on speech recognition only.</p>
                    <p>More research: For proper observation of the amount of training and learning curve required for people to fully grasp the system, a longitudinal study would be used to help boost the accuracy of results and better conclusions can be drawn. A larger sample size would also be considered as it would provide richer data from a wider variety of results.</p>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row pb-5 previousBtn">
                    <div className="col-md-6 d-flex mt-3 mt-md-0">
                        <NavLink to='/product-design/cancer-care'>
                            <i className="zmdi zmdi-arrow-left"></i>
                            <span className="fw-400 fs-18 caps">Previous</span>
                        </NavLink>
                    </div>
                    <div className="col-md-6 justify-content-md-end d-flex mt-3 mt-md-0 nextBtn">
                        <NavLink to="/product-design/homely">
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