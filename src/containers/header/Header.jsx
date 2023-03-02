import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt2__header section__padding" id="home">
      <div className="gpt2__header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT-2 OpenAI</h1>
        <p>Yet bed any for travelling asstance</p>
        <div className="gpt2__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
      </div>

      <div className="gpt2__header-content__people"></div>
        <img src={people} alt="people"/>
        <p>1,600 people requested access a vist in last 24 hours</p>
      </div>
      <div className="gpt2__header-image"></div>
        <img src={ai} alt="ai"/>
    </div>
    
  )
}

export default Header