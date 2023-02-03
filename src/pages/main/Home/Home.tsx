import React from 'react';
import './Home.scss'
import {JavascriptIcon, ReactIcon, ReduxIcon, TypescriptIcon} from '../../../utilities/icons';

export const Home = () => {
    return (

        <section className="home">
            <div className="container container--row">
                <div className="home__information">
                    <p className="home__subtitle subtitle">Hi, i`m</p>
                    <h1 className="home__title title">Anatoly <span>Movchan</span></h1>
                    <p className="home__text text">I’m a front-end developer who has a results-focused attitude to creating SPA, using React(JS/TS),
                        Redux. I would like to find project work and full-time employment in a company with a modern
                        approach to development and a collaborative team.</p>
                </div>
                <div className="home__photo-wrapper">
                        <ul className="home__photo-icons">
                            <li className="home__photo-icons_item">
                                <img src={ReactIcon} alt="react"/>
                            </li>
                            <li className="home__photo-icons_item">
                                <img src={ReduxIcon} alt="redux"/>
                            </li >
                            <li className="home__photo-icons_item">
                                <img src={JavascriptIcon} alt="javascript"/>
                            </li>
                            <li className="home__photo-icons_item">
                                <img src={TypescriptIcon} alt="typescript"/>
                            </li>
                        </ul>
                        <img className="home__photo" src="https://ethemestudio.com/demo/fungi/4_developer/image/hero_main_image.png" alt="User Avatar"/>
                </div>
            </div>


        </section>

    );
};
