import React, { Component, useState } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import './Navbar.css';

const Navbar = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (): void => {
    console.log('clicked');
    setIsClicked(!isClicked);
  };

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          React<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    </>
  );
};

export default Navbar;
