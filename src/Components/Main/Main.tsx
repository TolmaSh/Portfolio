import React from 'react';
import './Main.scss'
import {Home} from "./Home/Home";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";

export const Main = () => {
    return (
        <main>
            <Home/>
            <Skills/>
            <Projects/>
        </main>
    );
};
