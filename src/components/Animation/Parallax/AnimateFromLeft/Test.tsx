import React, { Component, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useViewportScroll, motion, useTransform, useMotionValue, MotionStyle, AnimatePresence } from 'framer-motion';
import './styles.css';

interface AnimateFromLeftProps {
  children?: React.ReactNode;
  width: number;
  height: number;
  xPos: number;
  yPos: number;
  style?: MotionStyle;
}

const Test = ({ children, width, height, xPos, yPos, style }: AnimateFromLeftProps): JSX.Element => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: {
      enter: {
        x: -1000,
      },
    },
    hidden: {
      exit: {
        x: 0,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="enter"
          animate={inView ? 'visible' : 'hidden'}
          //   variants={variants}
          transition={{ duration: 1, ease: 'easeIn' }}
          ref={ref}
          style={{ ...style, x: xPos, y: yPos, width, height }}
          className="box"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Test;
