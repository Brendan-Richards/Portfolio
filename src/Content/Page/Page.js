import React from 'react';
import classes from './Page.module.css';
import PageSection from './PageSection/PageSection';

const Page = (props) => {

    return (
        props.titles.map((title, i) => {
            return (
                <PageSection 
                    className={classes.Page}
                    key={title}
                    title={title} 
                    link={props.links[i]}
                    linkText={props.linkTexts[i]}
                    image={props.images[i]} 
                    explanation={props.explanations[i]} />
            );
        })  
    );
};

export default Page;