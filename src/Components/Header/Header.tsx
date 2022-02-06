import React from 'react';
import './Header.scss'
import {Navigation} from "./Navigation/Navigation";

export const Header = () => {
    return (
        <header className='header'>
            <h1>Header</h1>
            <Navigation/>
        </header>
    );
};
