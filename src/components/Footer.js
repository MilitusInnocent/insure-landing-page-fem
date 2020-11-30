import React from 'react';
import { Button } from './';
import logo from '../images/logo.svg';

const Footer = () => {
    const footerLinks = ['How we work', 'Why Insure?', 'View plans', 'Reviews', 'FAQ', 'Terms of use', 'Privacy policy', 'Cookies', 'Sales', 'Support', 'Live chat', 'Careers', 'Press', 'Licenses'];
    
    return (
        <div className="footer">
            <div className="footer__header">
                <img className="logo logo--footer" src={logo} alt="Company logo" />
                <div className="footer__social__logos">
                    <a href="#" aria-label="Facebook icon">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="#" aria-label="Twitter icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" aria-label="Pinterest icon">
                        <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="#" aria-label="Instagram icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>

            <hr className="footer__line" />

            <div className="footer__links__container">
                <div className="footer__links__list">
                    <h5 className="footer__links__heading">Our company</h5>
                    <ul className="footer__links footer__links--company">
                        {footerLinks.slice(0, 4).map((link, i) => (
                            <li className="footer__link" key={i}>
                               <a href="#">{ link }</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer__links__list">
                    <h5 className="footer__links__heading">Help Me</h5>
                    <ul className="footer__links footer__links--help">
                        {footerLinks.slice(4, 8).map((link, i) => (
                            <li className="footer__link" key={i}>
                                <a href="#">{ link }</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer__links__list">
                    <h5 className="footer__links__heading">Contact</h5>
                    <ul className="footer__links footer__links--contact">
                        {footerLinks.slice(8, 11).map((link, i) => (
                            <li className="footer__link" key={i}>
                                <a href="#">{ link }</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer__links__list">
                    <h5 className="footer__links__heading">Others</h5>
                    <ul className="footer__links footer__links--others">
                        {footerLinks.slice(11, footerLinks.length).map((link, i) => (
                            <li className="footer__link" key={i}>
                                <a href="#">{ link }</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;