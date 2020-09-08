import React from 'react';
import classes from './PageSection.module.css';

const PageSection = (props) => {

    if (props.title.trim() === ''){ // this is for a contact section
        if (props.linkText === 'Resume'){
            return (
                <div className={classes.ContactSection}>
                    <div className={classes.ContactFlexContainer}>
                        <div className={classes.ContactImage}>
                            <a href={props.link} download>
                                <img src={props.image} height='50px' width='50px' alt={props.linkText}/>
                            </a>
                        </div>
                        <div className={classes.ContactLink}><a href={props.link} download>{props.linkText}</a></div>
                    </div>
                </div>
            );             
        }
        return (
            <div className={classes.ContactSection}>
                <div className={classes.ContactFlexContainer}>
                    <div className={classes.ContactImage}>
                        <a href={props.link}>
                            <img src={props.image} height='50px' width='50px' alt={props.linkText}/>
                        </a>
                    </div>
                    <div className={classes.ContactLink}><a href={props.link} target='_blank' rel="noopener noreferrer">{props.linkText}</a></div>
                </div>
            </div>
        ); 
    }



    return (
        <div className={classes.Section}>
            <p className={classes.Title}>{props.title}</p>
            <div className={classes.FlexContainer}>
                <div className={classes.Image}><img src={props.image} alt={props.title}/></div>
                <div 
                    className={classes.Explanation} 
                    dangerouslySetInnerHTML={{__html: props.explanation }}></div>
            </div>
            <div className={classes.Link}><a href={props.link} target='_blank' rel="noopener noreferrer">{props.linkText}</a></div>
        </div>
    );
};

export default PageSection;