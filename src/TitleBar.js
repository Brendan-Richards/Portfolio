import React from 'react';
//import { Navbar, Button, Nav, Dropdown, Icon } from 'rsuite';
//import 'rsuite/dist/styles/rsuite-default.css';


const TitleBar = ({ onSelect, activeKey, ...props }) => {
  
    const nameSize = window.innerWidth > 550 ? '35px': '30px';
    const jobSize = window.innerWidth > 550 ? '35px': '23px';    

    const navBarStyle = {
        backgroundColor: 'white',
        borderBottom: '5px solid black',
        color: 'black', 
        padding: '20px 20px 0px 20px',
        fontSize: nameSize,
        margin: '0',
        textAlign: 'center',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        //top: -(props.offset)/3
    }

    const liStyle = {
        display: 'inline-block',
        margin: '10px 10px 10px 10px'
    }



    return ( 
       // <div style={navBarStyle}>
            <ul style={navBarStyle}>
                <li style={liStyle}><a href="/">About Me</a></li>
                <li style={liStyle}><a href="/">Projects</a></li>
                <li style={liStyle}><a href="/">Music</a></li>
                <li style={liStyle}><a href="/">Contact</a></li>
            </ul> 
       // </div>      
    );
}

export default TitleBar;