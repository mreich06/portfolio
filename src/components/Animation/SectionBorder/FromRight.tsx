import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Border } from './styles';
import Text from '../../../components/Text';

export const AllToRight = (): JSX.Element => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variantsRight = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 1000, opacity: 0 },
  };

  return (
    <ol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ref={ref}>
      <Border
        initial={{ x: 1000, opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5, type: 'tween' }}
        animate={inView ? 'visible' : 'hidden'}
        variants={variantsRight}
      />
    </ol>
  );
};

const FromLeftAndRight = (): JSX.Element => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variantsRight = {
    visible: { x: 100, opacity: 1 },
    hidden: { x: 1000, opacity: 0 },
  };

  return (
    <ol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40 }} ref={ref}>
      <Text large bold>
        {'MY SKILLS'}
      </Text>
      <Border
        initial={{ x: 1000, opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5, type: 'tween' }}
        animate={inView ? 'visible' : 'hidden'}
        variants={variantsRight}
      />
    </ol>
  );
};

export default FromLeftAndRight;
