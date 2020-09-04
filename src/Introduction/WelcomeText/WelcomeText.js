import React from 'react';
import classes from './WelcomeText.module.css';

const WelcomeText = (props) => {

    const rectPosition = {
        bottom: (props.offset)/2
    };

    return (
        <div>
            <div 
                style={rectPosition} 
                className={classes.BackingRect}>
                    <p className={classes.MyName}>Brendan Richards</p>
                    <p className={classes.MyTitles}>Software Engineer, Musician</p>
            </div>  
        </div>  

    );
}

export default WelcomeText;