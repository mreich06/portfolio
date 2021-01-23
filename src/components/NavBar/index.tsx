import React, { Component, useState } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Data } from './../Data';

// onClick to ul to show sidebar or not, t or f

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
          {Data.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  {/* <a className={item.cName} href={item.url}>
                    {item.title}
                  </a> */}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Button>Click here</Button>
      </nav>
    </>
  );
};

export default Navbar;
