import React from 'react';
import classes from './PageSection.module.css';

const PageSection = (props) => {

    return (
        <div className={classes.Section}>
            <p className={classes.Title}>{props.title}</p>
            <div className={classes.FlexContainer}>
                <div className={classes.Image}><img src={props.image} alt={props.title}/></div>
                <div className={classes.Explanation}>{props.explanation + props.explanation + props.explanation + 'howdy'}</div>
            </div>
            <div className={classes.Link}><a href={props.link}>{props.linkText}</a></div>
        </div>
    );
};

export default PageSection;