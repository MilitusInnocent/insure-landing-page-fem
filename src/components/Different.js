import React from 'react';
import {DifferentCard} from './';
import snappyImage from '../images/icon-snappy-process.svg';
import affordableImage from '../images/icon-affordable-prices.svg';
import peopleImage from '../images/icon-people-first.svg';

const Different = () => (
    <div className="different">
        <div className="different__textbox">
            <hr className="different__line" />
            <h2 className="different__heading">We're different</h2>
        </div>
        <div className="different__card__container">
            <DifferentCard
                image={snappyImage}
                heading='Snappy Process'
                text="Our application process can be completed in minutes, not hours. 
                Don't get stuck in filling tedious forms."
            />

            <DifferentCard
                image={affordableImage}
                heading='Affordable Prices'
                text="We don't want you worrying about high monthly costs. Our prices 
                may be low, but we still offer the best coverage possible."
            />

            <DifferentCard
                image={peopleImage}
                heading='People First'
                text="Our plans aren't full of conditions and clauses to prevent payouts. 
                We make sure you're covered when you need it."
            />
        </div>
    </div>
)

export default Different;