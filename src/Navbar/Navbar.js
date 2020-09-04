import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './Navbar.module.css';


const Navbar = (props) => {
  
    // const navBarStyle = {
    //     backgroundColor: 'white',
    //     borderBottom: '5px solid black',
    //     color: 'black', 
    //     padding: '20px 20px 0px 20px',
    //     fontSize: nameSize,
    //     margin: '0',
    //     textAlign: 'center',
    //     fontFamily: 'Helvetica',
    //     fontWeight: 'bold',
    //     //top: -(props.offset)/3
    // }

    // const liStyle = {
    //     display: 'inline-block',
    //     margin: '10px 10px 10px 10px'
    // }


    return ( 
      <div className={classes.Navbar}>
          <NavigationItems orientation={props.orientation}/>
      </div>    
    );
}

export default Navbar;