import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Border } from './styles';

const FromLeftAndRight = (): JSX.Element => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variantLeft = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -2000, opacity: 0 },
  };
  const variantsRight = {
    visible: { x: 100, opacity: 1 },
    hidden: { x: 2000, opacity: 0 },
  };

  return (
    <ol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }} ref={ref}>
      <Border
        initial={{ x: -2000, opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5, type: 'tween' }}
        animate={inView ? 'visible' : 'hidden'}
        variants={variantLeft}
        ref={ref}
      />
      <Border
        initial={{ x: 2000, opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5, type: 'tween' }}
        animate={inView ? 'visible' : 'hidden'}
        variants={variantsRight}
      />
    </ol>
  );
};

export default FromLeftAndRight;
