import React from 'react';
import './App.css';

import { Footer, Blog, Possibility, Feature, WhatGPT2, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

export default function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT2 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}