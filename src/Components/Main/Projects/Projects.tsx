import React from 'react';
import './Projects.scss'
import {Project} from "./Project";

export const Projects = () => {
    return (
        <section className='projects'>
            <div className="container container--column">
                <h2 className='title'>Projects</h2>
                <div className="projects__wrapper">
                <Project/>
                <Project/>
                </div>
            </div>
        </section>
    );
};
