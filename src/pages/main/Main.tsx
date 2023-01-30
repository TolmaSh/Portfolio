import React from 'react';
import './Main.scss'
import {Home} from "./Home/Home";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";

export const Main = () => {
    return (
        <main>
            <Home/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </main>
    );
};
