import React from 'react';

import possibilityImage  from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt2__possibility section__padding' id='padding'>
      <div className='gpt2__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt2__possibilty-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibility are boyond our imagination</h1>
        <p>Yet bed any for travelling assistance</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility;