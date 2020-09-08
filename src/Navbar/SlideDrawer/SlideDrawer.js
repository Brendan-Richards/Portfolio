import React from 'react';
import classes from './SlideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const SlideDrawer = (props) => {

    let attachedClasses = [classes.SlideDrawer, classes.Close]
    if (props.open){
        attachedClasses = [classes.SlideDrawer, classes.Open]
    }

    return (
        <div className={attachedClasses.join(' ')}>
          <NavigationItems 
            orientation={props.orientation}
            aboutClicked={props.aboutClicked}
            projectsClicked={props.projectsClicked}
            musicClicked={props.musicClicked}
            contactClicked={props.contactClicked}
            />
        </div>
    );

}

export default SlideDrawer;