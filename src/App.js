import React, { Component } from 'react';
import './App.css';
import Introduction from './Introduction/Introduction';
import Content from './Content/Content';
import TitleBar from './TitleBar';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      offset: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };


  render () {
    return (
      <div>
        <Introduction offset={this.state.offset} />
        <div style={{position: 'relative', top: -(this.state.offset)/6}}>
          <TitleBar />
          <Content />
        </div>
      </div>
    )};
}


export default App;
