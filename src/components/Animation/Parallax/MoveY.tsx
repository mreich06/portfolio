import React, { Component, useState, useEffect } from 'react';
import './styles.css';
import { useInView } from 'react-intersection-observer';
import { useViewportScroll, motion, useTransform, useMotionValue } from 'framer-motion';
import styled from 'styled-components';

interface ParallaxProps {
  children?: React.ReactNode;
  input: number[];
  output: number[];
  xPos: number;
}

const MoveY = ({ children, input, output, xPos }: ParallaxProps): JSX.Element => {
  const { scrollY } = useViewportScroll();
  const transformY = useTransform(scrollY, input, output);

  return (
    <motion.div
      className="box2"
      style={{
        y: transformY,
        x: xPos,
        width: 250,
        height: 250,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {children}
    </motion.div>
  );
};

export default MoveY;
