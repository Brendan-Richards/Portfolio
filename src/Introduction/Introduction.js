import React from 'react';
import mountains from '../images/mountain_banner_small.jpg';
import WelcomeText from './WelcomeText';

const Introduction = (props) => {

    const imgStyle = {
        objectFit: 'cover',
        width: '100%',
        height: props.height,
    } 

    const containerStyle = {
        position: 'relative',  
        backgroundPositionY: props.offset
    }

    return (
        <div style={containerStyle} >
            <img src={mountains} style={imgStyle} alt="mountains"/>
            <WelcomeText height={props.height} width={props.width} offset={props.offset}/>
        </div>
        
    );
};

export default Introduction;