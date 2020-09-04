import React from 'react';
import mountains from '../images/mountain4.jpg';
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
                    />
                <Backdrop 
                    show={props.showDrawer}
                    clicked={props.closeDrawer}
                    />
                <img 
                    src={mountains} 
                    className={classes.WelcomeImage}
                    style={{height: window.innerHeight}} 
                    alt="mountains" />
                <WelcomeText 
                    offset={props.offset} />
        </div>
    );
};

export default Introduction;