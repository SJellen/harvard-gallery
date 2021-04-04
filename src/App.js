import React from 'react';
import './style/App.css';
import Gallery from './Gallery'
import Video from './Video'
import Audio from './Audio'
import Footer from './Footer'
import Header from './Header'
import IconNav from './IconNav'

export default function App() {
    return (
      <div className="App" >
        <IconNav />
        <Header />
        <Gallery />
        <Video />
        <Audio />
        <Footer />
      </div>
  );
}

