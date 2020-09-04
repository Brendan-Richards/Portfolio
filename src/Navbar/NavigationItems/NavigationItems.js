import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => {
    let spacerClass = classes.HorizontalSpacer
    if (props.orientation === 'horizontal') {
        spacerClass = classes.VertialSpacer
    }
    
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' active orientation={props.orientation}>About Me</NavigationItem>
            <div className={spacerClass}></div>
            <NavigationItem link='/' orientation={props.orientation}>Projects</NavigationItem>
            <div className={spacerClass}></div>
            <NavigationItem link='/' orientation={props.orientation}>Music</NavigationItem>
            <div className={spacerClass}></div>
            <NavigationItem link='/' orientation={props.orientation}>Contact</NavigationItem>
        </ul>
    );
}


export default navigationItems;