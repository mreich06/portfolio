import React from 'react';
import './styles.css';
import { useInView } from 'react-intersection-observer';
import { useViewportScroll, motion, useTransform, useMotionValue, MotionStyle } from 'framer-motion';

interface ParallaxProps {
  children?: React.ReactNode;
  width: number;
  height: number;
  xPos: number;
  style?: MotionStyle;
}

const Parallax = ({ children, width, height, xPos, style }: ParallaxProps): JSX.Element => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.6,
      y: 20,
    },
  };

  return (
    <>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        ref={ref}
        style={{ ...style, x: xPos, width, height }}
        className="parallax"
      >
        {children}
      </motion.div>
    </>
  );
};

export default Parallax;
