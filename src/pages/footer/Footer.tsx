import React from 'react';
import './Footer.scss'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container container--column" >
                <h2 className='title'>Footer</h2>
                <ul className="footer__content">
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Github</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
};
