import React, { Component } from 'react';
import './App.css';
import Introduction from './Introduction/Introduction';
import Content from './Content/Content';
import mountains from './images/mountain_banner_small.jpg';

// function App() {
//   return (
//     <div className="App">
//       <header className="AppHeader"><img src={mountain} className="mountainImage"/></header>
//       <footer className="AppFooter">Home | Projects | Music | Contact   I am a person who made this website and stuff fdgfgf erefdf cf dfgdf</footer>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';

// Usage
class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      offset: 0
    };
  }


  //size = useWindowSize();

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
        <Introduction offset={this.state.offset} width={window.innerWidth} height={window.innerHeight} />
        <Content />
      </div>
    )};
}

// Hook
// function useWindowSize() {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     // Handler to call on window resize
//     function handleResize() {
//       // Set window width/height to state
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
    
//     // Add event listener
//     window.addEventListener("resize", handleResize);
    
//     // Call handler right away so state gets updated with initial window size
//     handleResize();
    
//     // Remove event listener on cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []); // Empty array ensures that effect is only run on mount

//   return windowSize;
// }


export default App;
