import React from 'react';
import { Link } from 'react-router-dom';

import './pages.style.css';

import { projects } from '../projects';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='headerText'>Hi, I’m Lateefah</h1>
                <p className='bodyText'>A Designer with experience creating holistic end-to-end human-centred  products with proven best practices  and design methodologies. I’m passionate about solving complex problems while ensuring great user experiences that serves the end user and meets the business goals.</p>
            </div>

            <div className='container'>
                <h5 className='categoryTitle'>Featured Projects</h5>
                <div className='projectGrid'>
                    {projects.map((project) => (
                        <div key={project.id}  className='projectCard'>
                            <Link to={`/product-design/${project.route}`} className='projectLink'> 
                                <div>
                                    <img className='projectImage' src={project.image} alt={project.title} />
                                    <h2 className='projectTitle'>{project.title}</h2>
                                    <div className="projectTags">
                                        {project.tags.split(',').map((tag) => (
                                            <span key={tag} className='projectTag'>{tag.trim()}</span>
                                        ))}
                                    </div>
                                    <p className='projectDesc'>{project.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;