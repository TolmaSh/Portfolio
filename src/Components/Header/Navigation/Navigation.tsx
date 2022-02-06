import React from 'react';
import './Navigation.scss'

export const Navigation = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <a href='#'>First</a>
                </li>
                <li className='nav__item'>
                    <a href='#'>Second</a>
                </li>
                <li className='nav__item'>
                    <a href='#'>Third</a>
                </li>
                <li className='nav__item'>
                    <a href='#'>Fourth</a>
                </li>
            </ul>
        </nav>
    );
};
