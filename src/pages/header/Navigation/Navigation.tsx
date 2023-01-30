import React from 'react';
import './Navigation.scss';

export const Navigation = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <a href='#about'>About me</a>
                </li>
                <li className='nav__item'>
                    <a href='#skills'>Skills</a>
                </li>
                <li className='nav__item'>
                    <a href='#projects'>Projects</a>
                </li>
                <li className='nav__item'>
                    <a href='#contacts'>Contacts</a>
                </li>
                <li className='nav__item'>
                    <a href='#cv'>CV</a>
                </li>
            </ul>
        </nav>
    );
};
