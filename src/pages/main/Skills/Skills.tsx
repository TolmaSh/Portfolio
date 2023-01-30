import React from 'react';
import './Skills.scss'
import {Skill} from "./Skill";

export const Skills = () => {
    return (
        <section className='skills'>
            <div className="container container--column">
                <h2 className='title'>My skills</h2>
                <div className='skills__wrapper'>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </section>
    );
};
