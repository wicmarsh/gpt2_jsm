import './App.css'

import { Footer, Blog, possibility, Feature, WhatGPT2, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

export default function App() {
  return (
    <div className="App">
      <div clssName="gradient_bg">
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
  )
}

export default App
 