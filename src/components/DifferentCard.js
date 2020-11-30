import React from 'react';

const DifferentCard = ({ image, heading, text }) => (
    <div className="different__card">
            <img className="different__card__icon" src={image} alt=""/>
            <div className="different__card__textbox">
                <h3 className="different__card__heading">{heading}</h3>
                <p className="different__card__subheading">{text}</p>    
            </div>
                
    </div>
)

export default DifferentCard;