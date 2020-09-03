import React from 'react';
import mountains from '../images/mountain4.jpg';
import WelcomeText from './WelcomeText/WelcomeText';

const Introduction = (props) => {

    const imgStyle = {
        objectFit: 'cover',
        width: '100%',
        height: window.innerHeight,
        padding: '0px',
        margin: '0px'
    } 

    const containerStyle = {
        position: 'relative',  
        backgroundPositionY: props.offset,
        margin: '0px',
        padding: '0px'
    }

    return (
        <div style={containerStyle} >
            <img src={mountains} style={imgStyle} alt="mountains"/>
            <WelcomeText offset={props.offset}/>
        </div>
        
    );
};

export default Introduction;