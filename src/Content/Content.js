import React from 'react';


const Content = (props) => {

    const contentStyle = {
        textAlign: 'center',
        backgroundColor: 'green',
        height: '5000px',
        position: 'relative',
        top: 0,
        margin: '0px',
        padding: '0px',
        //top: -(props.offset)/3
    }

    return (
        <div style={contentStyle}>
            content
        </div>
    );
};

export default Content;