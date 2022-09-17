import React, { Suspense } from 'react';
import './style/App.css';
import Footer from './Footer'
import Header from './Header'
import IconNav from './IconNav'

const Gallery = React.lazy(() => import('./Gallery'));
const Video = React.lazy(() => import('./Video'));
const Audio = React.lazy(() => import('./Audio'));

export default function App() {
    return (
      <div className="App" >
        <IconNav />
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Video />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Audio />
        </Suspense>
        <Footer />
      </div>
  );
}

