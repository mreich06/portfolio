import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Switch } from 'react-router-dom';

function Example() {
  // only apply transition object to apply transition
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        when: 'beforeChildren', // could be 'afterChildren' too
        mass: 0.4,
        damping: 10, // higher number dampens force
        staggerChildren: 0.2, // add to parent element
      },
    },
  };

  const childVariants = {
    hidden: {
      x: 0,
    },
    visible: {
      x: 100,
      transition: {
        type: 'tween',
      },
    },
  };

  const buttonVariants = {
    visible: {
      x: [0, 20, -20, 30], // animates to each key frame
      transition: {
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        yoyo: 10, // 10 is # keyframes, will scale between 1 and 1.1 ten times
        //   yoyo: Infinity
      },
    },
  };

  const switchVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, durtion: 1.4 },
    },
    exit: {
      x: '-100vh',
      transition: {
        ease: 'easeInOut',
      },
    },
  };
  return (
    <>
      {/* TRANSITIONS */}
      {/* spring only used with stiffness */}
      <motion.h2 animate={{ scale: 100 }} transition={{ type: 'spring', stiffness: 1.4 }}></motion.h2>
      {/* tween only used with duration */}
      <motion.h2 animate={{ scale: 100 }} transition={{ type: 'tween', duration: 1.4 }}></motion.h2>
      {/* HOVER */}
      {/* adds scale and glow on hover */}
      <motion.button whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(255, 255, 255)' }}></motion.button>
      {/* if animating to origin of transform of scale, animate to original x position using originX */}
      <motion.li whileHover={{ scale: 1.3, originX: 0, color: '#fff' }}></motion.li>
      {/* 
      VARIANTS
      allow initial, animate and transition into one object
      allow us to propagate variant changes through DOM - 
      create relationships bw parent and child using transition orchestration properties */}
      <motion.div variants={variants} initial="hidden" animate="visible"></motion.div>
      {/* when we have parent, animaation will propagate to children
      DOES NOT inherit animation, just inherits this:
      initial="hidden" animate="visible"
      so that you don't have to write them again
      MUST BE called same thing
       */}
      <motion.div variants={variants} initial="hidden" animate="visible">
        <motion.div variants={childVariants}></motion.div>
      </motion.div>
      {/* can use transition orchestration properties for delay define inside transition when- dictates when animation
      occurs in relation to children beforeChildren - means complete animation before children animations with spring
      types higher mass - moves slower lower mass - moves faster staggerChildren = staggers child animations */}
      {/* KEY FRAMES */}
      {/* to make complex animations that move from place to place */}
      <motion.div variants={buttonVariants} animate="visible" whileHover="hover"></motion.div>
      {/* REPEATING ANIMATIONS */}
      {/* use transition property: yoyo */}

      {/* ANIMATE PRESENCE */}
      {/* to animate off screen and remove component
      wrap component with it 
      need to define exit animation to use
      will use exit animation to take off screen
       */}
      {/* exitBeforeEnter means finish all animations before animating next page onto screen */}
      <AnimatePresence exitBeforeEnter>
        <motion.div variants={buttonVariants} animate="visible" whileHover="hover" exit={{ y: -1000 }}></motion.div>
      </AnimatePresence>

      {/* Animate whole pages out */}
      {/* Surround Switch component with AnimatePresence in Router
      Needs to know when route changes
      use useLocation to get info
      will fire animation when location changes
      ADd exit animation to each component
        */}

      {/* <Switch location={location} key={location.key}></Switch> */}

      {/* then in component */}
      <motion.div variants={switchVariants} exit="exit"></motion.div>
    </>
  );
}

export default Example;
