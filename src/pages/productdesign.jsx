import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './pages.style.css';

import { projects } from '../projects';
import Footer from '../components/Footer';

// import GameBoard from '../GB';

function ProductDesign() {
    return (
        <div>
            <div className='container'>
                <h1 className='projectHeading'>Projects</h1>
                <div className='projectGrid'>
                    {projects.map((project) => (
                        <div key={project.id}  className='projectCard'>
                            <Link to={`/product-design/${project.route}`} className='projectLink'> 
                                <div>
                                    <img className='projectImage' src={project.image} alt={project.title} />
                                    <h2 className='projectTitle'>{project.title}</h2>
                                    <div className="tags">
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
    );
}

export default ProductDesign;
