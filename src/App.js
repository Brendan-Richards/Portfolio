import React, { Component } from 'react';
import Introduction from './Introduction/Introduction';
import Content from './Content/Content';
import Navbar from './Navbar/Navbar';
import classes from './App.module.css';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      offset: 0,
      showDrawer: false
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


  render () {
    console.log(this.state.showDrawer)

    return (

      <div>
        <Introduction 
          offset={this.state.offset} 
          toggleClicked={this.toggleClickedHandler}
          showDrawer={this.state.showDrawer} 
          closeDrawer={this.topDrawerClosedHandler} 
          />
        <div style={{position: 'relative', top: -(this.state.offset)/6}}>
        {window.innerWidth > 500 ? <div className={classes.ContentSpacer}></div> : null }
          {window.innerWidth > 500 ? <Navbar orientation='horizontal'/> : null}
          {window.innerWidth > 500 ? <div className={classes.ContentSpacer}></div> : null }
          <Content />
        </div>
      </div>
    )};
}


export default App;
