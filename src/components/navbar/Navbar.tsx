import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt2">What is GPT2?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#feature">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt2__navbar">
      <div className="gpt2__navbar-links">
        <div className="gpt2__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt2__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt2">What is GPT2?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#feature">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
          <Menu />
        </div>
      </div>
      <div className="gpt2__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="gpt2_navbar-menu_container scale-up-center">
            <div className="gpt2__navbar-menu_container-links"></div>
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;