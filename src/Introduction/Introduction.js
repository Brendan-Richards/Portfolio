import React from 'react';
import mountains from '../images/Intro/mountain4.jpg';
import mountains_small from '../images/Intro/mountain4_small.jpg';
import WelcomeText from './WelcomeText/WelcomeText';
import classes from './Introduction.module.css';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import SlideDrawer from './SlideDrawer/SlideDrawer';
import Backdrop from './Backdrop/Backdrop';

const Introduction = (props) => {

    return (
        <div 
            className={classes.Introduction}
            style={{backgroundPositionY: props.offset}} >
                <DrawerToggle clicked={props.toggleClicked} open={props.showDrawer}/>
                <SlideDrawer 
                    open={props.showDrawer}
                    closed={props.closeDrawer}
                    aboutClicked={props.aboutClicked}
                    projectsClicked={props.projectsClicked}
                    musicClicked={props.musicClicked}
                    contactClicked={props.contactClicked}
                    />
                <Backdrop 
                    show={props.showDrawer}
                    clicked={props.closeDrawer}
                    />
                <img 
                    src={window.innerWidth > 500 ? mountains : mountains_small} 
                    className={classes.WelcomeImage}
                    style={{height: window.innerHeight}} 
                    alt="mountains" />
                <WelcomeText 
                    offset={props.offset} />
        </div>
    );
};

export default Introduction;