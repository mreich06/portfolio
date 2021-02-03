import React, { Component, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimateUpText from '../../../Text/AnimateUpText';
import './AboutMe.css';
import AnimatedAboutMeText from '../../../Text/AnimateUpText';
import AnimatedText from '../../../Text/AnimatedText';
import { styles } from './styles';
import Parallax from '../../../Animation/Parallax';
import MoveY from '../../../Animation/Parallax/MoveY';
import Text from '../../../../components/Text';
import {
  WebDevTitle,
  WebDevDescription,
  DigitalArtTitle,
  DigitalArtDescription,
  FirstSectionDescription,
  FirstSectionTitle,
} from './../../../../content/AboutMeContent';
import { Colors } from '../../../Text/values';
import AnimateFromLeft from '../../../Animation/Parallax/AnimateFromLeft';
import Footer from '../../../Footer';

const AboutMe = (): JSX.Element => {
  return (
    <>
      <div className="webDevTitleContainer">
        <h1 className="webDevTitle">
          <div style={{ height: 750 }}>
            <AnimatePresence>
              {/* animates the opacity of the text */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <AnimatedText section={WebDevTitle} style={styles.titleStyle} animationIndex={1} />
                <AnimatedText
                  section={WebDevDescription}
                  style={styles.descriptionStyle}
                  animationIndex={2}
                  delayMultiple={0.07}
                />
                <div className="margin">
                  <AnimatedText section={DigitalArtTitle} style={styles.titleStyle} animationIndex={3} />
                  <AnimatedText
                    section={DigitalArtDescription}
                    style={styles.descriptionStyle}
                    animationIndex={4}
                    delayMultiple={0.07}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </h1>
      </div>

      <div style={{ padding: 50, display: 'flex' }}>
        <div style={{ flex: 1, color: 'white' }}>
          <Parallax width={500} height={400} xPos={800}>
            <Text small color={Colors.White} textAlign={'left'}>
              {FirstSectionDescription}
            </Text>
          </Parallax>
        </div>
        <div style={{ flex: 1 }}>
          <Parallax width={500} height={400} xPos={-800}>
            <Text lineHeight={'35px'} large color={Colors.White} textAlign={'left'}>
              {FirstSectionTitle}
            </Text>
          </Parallax>
        </div>
      </div>
      <AnimateFromLeft width={200} height={20} xPos={-500} yPos={-400}></AnimateFromLeft>

      {/* <MoveY input={[0, 300]} output={[0, 200]} xPos={-550}></MoveY>
        <MoveY input={[0, 300]} output={[0, -100]} xPos={150}></MoveY> */}

      <h1>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      </h1>
      <Footer />
    </>
  );
};

export default AboutMe;
