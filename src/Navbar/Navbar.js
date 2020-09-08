import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './Navbar.module.css';


import DrawerToggle from './DrawerToggle/DrawerToggle';
import SlideDrawer from './SlideDrawer/SlideDrawer';
import Backdrop from './Backdrop/Backdrop';


const Navbar = (props) => {
  
  //desktop view
  if (props.orientation === 'horizontal'){
    return ( 
      <div className={classes.Navbar}>
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
  //mobile view
  else {
    return (
      <div style={{position: 'relative', margin: '0', padding: '0'}}>
        <DrawerToggle clicked={props.toggleClicked} open={props.showDrawer}/>
        <SlideDrawer 
            open={props.showDrawer}
            closed={props.closeDrawer}
            aboutClicked={props.aboutClicked}
            projectsClicked={props.projectsClicked}
            musicClicked={props.musicClicked}
            contactClicked={props.contactClicked}
            />
        <Backdrop 
            show={props.showDrawer}
            clicked={props.closeDrawer}
            /> 
      </div>   
    );
  }

}

export default Navbar;