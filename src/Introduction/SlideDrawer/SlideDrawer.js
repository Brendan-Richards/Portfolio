import React from 'react';
import classes from './SlideDrawer.module.css';
import Navbar from '../../Navbar/Navbar';

const SlideDrawer = (props) => {

    let attachedClasses = [classes.SlideDrawer, classes.Close]
    if (props.open){
        attachedClasses = [classes.SlideDrawer, classes.Open]
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <Navbar orientation={'vertical'} />
        </div>
    );

}

export default SlideDrawer;