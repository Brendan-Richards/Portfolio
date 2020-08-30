import React, { useRef, useEffect, useState } from 'react';

const WelcomeText = (props) => {

    const padAmount = 20;
    
    const padString = padAmount.toString() + 'px ' + padAmount.toString() + 'px ' 
        + padAmount.toString() + 'px ' + padAmount.toString() + 'px';

    const offsetX = 600;
    const offsetY = 1000

    const textStyle = {
        color: 'white', 
        padding: padString,
        fontSize: '50px',
        opacity: '1'
    }


    const boxStyle = {
        bottom: (props.offset+offsetY)/2,
        position: 'absolute',
        textAlign: 'center',
        // top: (props.height)/2,
        left: (props.width-offsetX)/2,
        opacity: '0.75',
        backgroundColor: '#003311',
        borderRadius: '25px',
        boxShadow: '0px 0px 27px 1px rgba(0,0,0,0.57)'
    }

    return (
        <div style={boxStyle}>
            <p style={textStyle}>Brendan Richards  <br /> Software Engineer, Musician</p>
        </div>    
    );
}

export default WelcomeText;