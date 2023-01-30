import React from 'react';
import './Header.scss'
import {Navigation} from "./Navigation/Navigation";

export const Header = () => {
    return (
        <header className='header'>
            <div className="container container--row">
                <h1>Header</h1>
                <Navigation/>
            </div>
        </header>
    );
};
