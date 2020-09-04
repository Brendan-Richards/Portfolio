import React from 'react';
import classes from './NavigationItem.module.css';


const navigationItem = (props) => {

    let sideBorders = null;
    if (props.orientation === 'horizontal') {
        sideBorders = classes.Horizontal
    }


    return (
        <li className={[classes.NavigationItem, sideBorders].join(' ')}>
            <a 
                href={props.link} 
                className={props.active ? classes.Active : null}>
                    {props.children}
            </a>
        </li>
    );
};


export default navigationItem;