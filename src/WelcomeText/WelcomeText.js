import React from 'react';
import classes from './WelcomeText.module.css';

const WelcomeText = (props) => {

    return (
        <div>
            <div className={classes.BackingRect}>
                    <p className={classes.MyName}>Brendan Richards</p>
                    <p className={classes.MyTitles}>Software Engineer, Musician</p>
            </div>  
        </div>  

    );
}

export default WelcomeText;