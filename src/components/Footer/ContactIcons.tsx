import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { IconSymbols, IconType } from './Icons';
import { IconMargin, IconMotionList } from './styles';

const ContactIcons = (): JSX.Element => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <IconMotionList animate={inView ? 'visible' : 'hidden'} variants={container} ref={ref}>
      {IconSymbols.map((icon: IconType, index: number) => (
        <motion.li variants={item} key={index}>
          <IconMargin>
            <i className={icon.name} style={{ color: icon.color }} />
          </IconMargin>
        </motion.li>
      ))}
    </IconMotionList>
  );
};

export default ContactIcons;
