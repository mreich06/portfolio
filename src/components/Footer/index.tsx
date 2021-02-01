import React, { Component, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useViewportScroll, motion, useTransform, useMotionValue, MotionStyle, AnimatePresence } from 'framer-motion';
import './styles.css';
import Text from './../Text';
import { FooterTitle, FooterDescription } from '../../content/Footer';

interface AnimateFromLeftProps {
  children?: React.ReactNode;
  width: number;
  height: number;
  xPos: number;
  yPos: number;
  style?: MotionStyle;
}

const Footer = (): JSX.Element => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });
  const variants = {
    visible: {},
    hidden: {},
  };
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <Text large bold textAlign={'center'}>
            {FooterTitle}
          </Text>
          <Text small textAlign={'center'}>
            {FooterDescription}
          </Text>
        </div>
      </div>
      {/* 
  
      <AnimatePresence>
        <motion.div
          initial={{ y: -100 }}
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1, ease: 'easeIn' }}
          ref={ref}
          style={{ ...style, x: xPos, y: yPos, width, height }}
          className="box"
        >
          {children}
        </motion.div>
      </AnimatePresence> */}
    </>
  );
};

export default Footer;
