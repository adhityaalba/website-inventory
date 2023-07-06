import React from 'react';
import '../styles/navbar.css';
import '../images/logomnc.png';

const Navbar = () => {
  return (
    <header>
      <div className="headerInner">
        <img src={'https://play-lh.googleusercontent.com/q03THPCmebYz6FG0-Uzv-AmWNcMuvry8021tM-zV7E5MwlHwoodoT1w2wt0KnrymiQ=w240-h480-rw'} className="headerLogo" alt="logo" />
        {/* <button id="menu" class="headerMenu" href="#drawer.open">
          ☰
        </button> */}
        <nav className="navbar" id="navbar">
          <ul className="nav">
            <a className="sub" href="/">
              INVENTORIS HT
            </a>
          </ul>
        </nav>
      </div>
      <div id="drawer">
        <ul>
          <li className="drawerItem">
            <a href="/">Home</a>
          </li>
          <li className="drawerItem">
            <a href="#/about-us">About Us</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
