import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../NavBar/Tabs/AboutMe/styles';

export interface AnimatedTextProps {
  section: string;
  animationIndex: number;
  style?: any;
  marginStyle?: any;
  delayMultiple?: number;
}

// create prop for size of text and style (margin)
// make index global var that gets altered when each animation runs so that next animation can be based off that

const AnimatedText = ({
  section,
  animationIndex,
  style,
  marginStyle,
  delayMultiple = 0.2,
}: AnimatedTextProps): JSX.Element => {
  let words = section.split(' ');

  return (
    <div style={marginStyle}>
      {words.map((word: string, i: number) => (
        <div key={word + i} style={{ ...styles.display, ...style }}>
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
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
