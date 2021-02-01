import React from 'react';
import { motion } from 'framer-motion';

interface AnimateUpTextProps {
  sections: string[];
  children: any;
}

interface AnimatedWordsProps {
  section: string;
}

// Create one animation for all About Me text
// 1. Web Developer
// 2. Web Dev small text
// 3. Digital Artist
// 4. Digital art small text

// Create 4 strings
// map through words in each string first to create word by word animation
// map through strings to animate the different sections
// [ 'Web Dev', 'this is my description',]

// section: 'Web Dev', word: 'WEb'
const AnimatedWords = ({ section }: AnimatedWordsProps): JSX.Element => {
  let words = section.split(' ');

  return (
    <div>
      {words.map((word: string, i: number) => (
        <div
          key={word + i}
          style={{ display: 'inline-block', overflow: 'hidden', marginLeft: word === 'Digital' ? 800 : 0 }}
        >
          <motion.div
            initial={{ y: '100%' }}
            animate="visible"
            variants={{
              visible: (i: number) => ({
                y: 0,
                transition: {
                  delay: i * 0.2,
                },
              }),
            }}
            // style={{ display: 'inline-block', willChange: 'transform' }}
            custom={i}
          >
            {word + (i !== words.length - 1 ? '\u00A0' : '')}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const AnimatedAboutMeText = ({ sections, children, ...rest }: AnimateUpTextProps) => {
  return (
    <>
      {sections.map((section: string) => (
        <AnimatedWords {...{ section }} />
      ))}
    </>
  );
};

export default AnimatedAboutMeText;
