import React, { Component } from 'react';
import Content from './Content/Content';
import Navbar from './Navbar/Navbar';
import classes from './App.module.css';
import { Parallax, Background } from 'react-parallax';
import mountain from './images/Intro/mountain4.jpg';
import mountainMobile from './images/Intro/mountain4_small.jpg';
import WelcomeText from './WelcomeText/WelcomeText';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      showDrawer: false,
      page: 'AboutMe'
    };
  }

  toggleClickedHandler = () => {
    this.setState((oldState) =>{
      return {showDrawer: !oldState.showDrawer}
    });
  }

  topDrawerClosedHandler = () => {
    this.setState({showDrawer: false})
  }

  aboutClickedHandler = () => {
    this.setState({page: 'AboutMe', showDrawer: false});
  }

  projectsClickedHandler = () => {
    this.setState({page: 'Projects', showDrawer: false});   
  }

  musicClickedHandler = () => {
    this.setState({page: 'Music', showDrawer: false});    
  }

  contactClickedHandler = () => {
    this.setState({page: 'Contact', showDrawer: false});    
  }


  render () {

    const orientation = window.innerWidth > 500 ? 'horizontal' : 'vertical';

    return (
      <div>
        <Parallax 
          bgImage={mountain}
          strength={500}>
          <div style={{ height: window.innerHeight}}>
            <WelcomeText />
          </div>
        </Parallax>  

        {window.innerWidth > 500 ? <div className={classes.ContentSpacer}></div> : null }
        <Navbar 
          orientation={orientation}
          toggleClicked={this.toggleClickedHandler}
          showDrawer={this.state.showDrawer} 
          closeDrawer={this.topDrawerClosedHandler} 
          aboutClicked={this.aboutClickedHandler}
          projectsClicked={this.projectsClickedHandler}
          musicClicked={this.musicClickedHandler}
          contactClicked={this.contactClickedHandler} />
        {window.innerWidth > 500 ? <div className={classes.ContentSpacer}></div> : null }
        <Content page={this.state.page}/>

      </div>
    )};
}


export default App;
