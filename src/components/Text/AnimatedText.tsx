import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../Navbar/Tabs/AboutMe/styles';
import { Display } from './styles';

export interface AnimatedTextProps {
  section: string;
  animationIndex: number;
  style?: any;
  delayMultiple?: number;
  title: boolean;
}

// create prop for size of text and style (margin)
// make index global var that gets altered when each animation runs so that next animation can be based off that

const AnimatedText = ({
  section,
  animationIndex,
  style,
  delayMultiple = 0.2,
  title = false,
}: AnimatedTextProps): JSX.Element => {
  let words = section.split(' ');

  return (
    <div>
      {words.map((word: string, i: number) => (
        // <Display title key={word + i}>
        <motion.div
          initial={{ y: '100%' }}
          animate="visible"
          variants={{
            visible: (i: number) => ({
              y: 0,
              transition: {
                delay: animationIndex + i * delayMultiple,
              },
            }),
          }}
          style={{ display: 'inline-block', willChange: 'transform' }}
          custom={i}
        >
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.div>
        // </Display>
      ))}
    </div>
  );
};

export default AnimatedText;
