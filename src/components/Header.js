import React from 'react';
import { Button } from './';
import heroImageDesktop from '../images/image-intro-desktop.jpg';
import heroImageMobile from '../images/bg-pattern-how-we-work-mobile.svg';

const Header = () => (
    <div className="header">
        <div className="header__textbox">
            <hr className="header__line"/>
            <h1 className="header__textbox__heading">Humanizing your insurance.</h1>
            <p className="header__textbox__subheading">
            Get your life insurance coverage easier and faster. We blend our expertise and 
            technology to help you find the plan that's right for you. 
            Ensure you and your loved ones are protected.
            </p>
            <Button color='gray' text='view plans' />
        </div>
        <div className="header__image__container">
            <img className="header__hero__image" src={heroImageDesktop} alt="how we work desktop" />
        </div>
    </div>
)

export default Header;