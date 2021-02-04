import React, { Component, useState } from 'react';
import { Button } from '../Button';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Data } from './../Data';
import { motion } from 'framer-motion';

// onClick to ul to show sidebar or not, t or f

const NavBar = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (): void => {
    console.log('clicked');
    setIsClicked(!isClicked);
  };

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          Maya Reich<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        {/* <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
          {Data.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  <span className="nav-links">{item.title}</span>
                  <div className="nav-links-underline"></div>
                </Link>
              </li>
            );
          })}
        </ul> */}
        <AnimatedNavItems />
      </nav>
    </>
  );
};

const itemVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: '#d62ba3',

    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedNavItems = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
      {Data.map((item, index) => {
        return (
          <motion.div variants={itemVariants} whileHover="hover" className="animated-item">
            <li key={index}>
              <Link to={item.path}>
                <span className="nav-links">{item.title}</span>
              </Link>
            </li>
          </motion.div>
        );
      })}
    </ul>
  );
};

export default NavBar;
