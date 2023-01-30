import React from 'react';
import './Projects.scss'

export const Project = () => {
    return (
        <div className='projects__item'>
            <div className='projects__item-img'>
                <img src="#" alt="project"/>
                <a href="#">Смотреть</a>
            </div>
            <h3 className='projects__item-title'>Project Title</h3>
            <p className='projects__item-text'>Lorem ipsum dolor sit amet,ma modi necessitatibus, neque nesciunt quae
                quibusdam rerum, sequi ullam?</p>

        </div>
    );
};
