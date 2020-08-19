import React from 'react';
import './style/App.css';
import Gallery from './Gallery'
import Video from './Video'
import Audio from './Audio'
import Footer from './Footer'
import useToggler from './useToggler'


function App() {
  const [show, toggle] = useToggler(true)

  return (
    <div className="App">
    <div className="header">
    <h1 className="title">Harvard Art Museum Explorer</h1>
      <i className="material-icons menu-icon" 
             onClick={toggle}
             style={{ display: show ? "block" : "none"}}
             
             >menu_icon</i>
       
        <nav style={{display: show ? "none" : "block"}}>
          
          <i className="material-icons close-icon"
              onClick={toggle}
              style={{display: show ? "none" : "block"}}
              >close_icon</i>
            <a href="#home" className="firstAnchor">Image Viewer</a>
            <a href="#video">Video Collection</a>
            <a href="#description" className="lastAnchor">Audio Descriptions</a> 
        </nav>
    </div>
      
      <Gallery />
      <Video />
      <Audio />
      <Footer />
    </div>
  );
}

export default App;
