import React from 'react';
import classes from './Content.module.css';
import Page from './Page/Page';
//import AboutMeImage from '../images/AboutMe.jpg';
//import AboutMeImage from '../images/AboutMe.jpg';


const Content = (props) => {

    return (
        <div className={classes.Content} style={{top: -(props.offset)/3}}>
            {/* <Page title='About Me'/>
            <Page />
            <Page />
            <Page /> */}
        </div>
    );
};

export default Content;