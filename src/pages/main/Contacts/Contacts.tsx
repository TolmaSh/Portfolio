import React from 'react';
import './Contacts.scss'

export const Contacts = () => {
    return (
        <section className='contacts'>
            <div className="container container--column">
                <h2 className='title'>Contacts</h2>
                <form action="#" className='contacts__form'>
                    <input className='contacts__input' name='name' type="text"/>
                    <input className='contacts__input' name='surname' type="text"/>
                    <textarea className='contacts__text' name="contacts" id="contacts">s</textarea>
                    <button className='contacts__btn'>Send</button>
                </form>
            </div>
        </section>
    );
};
