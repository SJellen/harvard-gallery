import React from 'react';
import './style/App.css';
import Gallery from './Gallery'
import Video from './Video'
import Audio from './Audio'




function App() {
  return (
    <div className="App">
      <h1>Harvard Art Museum Explorer</h1>
      <Gallery />
      <Video />
      <Audio />
    </div>
  );
}

export default App;
