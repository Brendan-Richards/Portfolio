import React, { useRef, useEffect, useState } from 'react';

const WelcomeText = (props) => {

    const offsetX = 600;
    const offsetY = 1000;

    const nameSize = window.innerWidth > 550 ? '50px': '30px';
    const jobSize = window.innerWidth > 550 ? '35px': '23px';

    const textStyleName = {
        color: 'black', 
        padding: '20px 20px 0px 20px',
        fontSize: nameSize,
        margin: '0',
        fontFamily: 'Helvetica',
        fontWeight: 'bold'
    }

    const textStyleJobs = {
        ...textStyleName,
        fontSize: jobSize,
        padding: '20px 20px 20px 20px',

    }

    const boxStyle = {
        bottom: (props.offset)/3 ,
        position: 'absolute',
        textAlign: 'left',
        backgroundColor: 'white',
        width: '100%',
        background: 'rgba(255,255,255,0.5)'
    }

    return (
        <div style={boxStyle}>
            <p style={textStyleName}>Brendan Richards</p>
            <p style={textStyleJobs}>Software Engineer, Musician</p>
        </div>    

    );
}

export default WelcomeText;