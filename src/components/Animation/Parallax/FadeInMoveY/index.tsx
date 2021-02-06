import React, { Component, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useViewportScroll, motion, useTransform, useMotionValue } from 'framer-motion';

interface ParallaxProps {
  children?: React.ReactNode;
  input: number[];
  output: number[];
  xPos: number;
}

// fades in like Parallax but also moves in y direction

const FadeInMoveY = ({ children, input, output, xPos }: ParallaxProps): JSX.Element => {
  const { scrollY } = useViewportScroll();
  const transformY = useTransform(scrollY, input, output);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.6,
      y: -20,
    },
  };

  return (
    <motion.div
      // initial="hidden"
      className="box"
      animate={inView ? 'visible' : 'hidden'}
      style={{ y: transformY, x: xPos, background: 'blue' }}
      ref={ref}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInMoveY;
