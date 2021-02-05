import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Border } from './styles';
import Text from '../../../components/Text';

const FromLeftAndRight = (): JSX.Element => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variantsRight = {
    visible: { x: 300, opacity: 1 },
    hidden: { x: 1000, opacity: 0 },
  };

  return (
    <ol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }} ref={ref}>
      <Text large bold>
        {'My Skills'}
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
