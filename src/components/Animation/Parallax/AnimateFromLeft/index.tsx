import React, { Component, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useViewportScroll, motion, useTransform, useMotionValue, MotionStyle } from 'framer-motion';
import './styles.ts';
import { Box } from './styles';

interface AnimateFromLeftProps {
  children?: React.ReactNode;
  width: number;
  height: number;
  xPos: number;
  yPos: number;
  style?: MotionStyle;
}

const AnimateFromLeft = ({ children, width, height, xPos, yPos, style }: AnimateFromLeftProps): JSX.Element => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: {
      opacity: 1,
      x: -500,
      transition: {
        delay: 1,
        scaleX: 2,
      },
    },
    hidden: {
      scaleX: 0.1,
      opacity: 0,
      x: -1000,
    },
  };

  const variants2 = {
    visible: {
      enter: {},
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  return (
    <>
      <Box
        // initial={{ x: -1500 }}
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1, ease: 'easeIn' }}
        ref={ref}
        style={{ ...style, x: xPos, y: yPos, width, height }}
        className="box"
      >
        {children}
      </Box>
    </>
  );
};

export default AnimateFromLeft;
