import React, { Component } from 'react';
import Introduction from './Introduction/Introduction';
import Content from './Content/Content';
import Navbar from './Navbar/Navbar';
import classes from './App.module.css';
import { AutoComplete } from 'rsuite';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      offset: 0,
      showDrawer: false,
      page: 'AboutMe'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }

  toggleClickedHandler = () => {
    this.setState((oldState) =>{
      return {showDrawer: !oldState.showDrawer}
    });
  }

  topDrawerClosedHandler = () => {
    this.setState({showDrawer: false})
  }


  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };

  aboutClickedHandler = () => {
    this.setState({page: 'AboutMe'});
    console.log('about me was clicked!');
  }

  projectsClickedHandler = () => {
    this.setState({page: 'Projects'});   
    console.log('projects was clicked!');
  }

  musicClickedHandler = () => {
    this.setState({page: 'Music'});    
  }

  contactClickedHandler = () => {
    this.setState({page: 'Contact'});    
  }


  render () {
    //console.log(this.state.showDrawer)

    return (

      <div className={classes.Hello}>
        <Introduction 
          offset={this.state.offset} 
          toggleClicked={this.toggleClickedHandler}
          showDrawer={this.state.showDrawer} 
          closeDrawer={this.topDrawerClosedHandler} 
          />
        <div style={{position: 'relative', top: -(this.state.offset)/6}} className="big-container">
          {window.innerWidth > 500 ? <div className={classes.ContentSpacer}></div> : null }
          {window.innerWidth > 500 ? 
            <Navbar 
              orientation='horizontal'
              aboutClicked={this.aboutClickedHandler}
              projectsClicked={this.projectsClickedHandler}
              musicClicked={this.musicClickedHandler}
              contactClicked={this.contactClickedHandler}
              /> : null}
          {window.innerWidth > 500 ? <div className={classes.ContentSpacer}></div> : null }
          <Content page={this.state.page}/>
        </div>
      </div>
    )};
}


export default App;
