import React, { Component, useState } from 'react';
import { AnimatePresence, m, motion } from 'framer-motion';
import AnimateUpText from '../../../Text/AnimateUpText';
import './AboutMe.css';
import AnimatedAboutMeText from '../../../Text/AnimateUpText';
import AnimatedText from '../../../Text/AnimatedText';
import { Intro, IntroContainer, Margin, styles } from './styles';
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
import SectionBorder from '../../../Animation/SectionBorder/FromLeftAndRight';
import FromLeftAndRight from '../../../Animation/SectionBorder/FromLeftAndRight';
import FromRight, { AllToRight } from '../../../Animation/SectionBorder/FromRight';
import Skills from './components/Skills';
import DigitalArtPanel from './components/DigitalArtPanel';

const AboutMe = (): JSX.Element => {
  return (
    <>
      <IntroContainer>
        <Intro>
          <div style={{ height: 500 }}>
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
        </Intro>
      </IntroContainer>
      <div style={{ padding: 50, display: 'flex' }}>
        <div style={{ flex: 1, color: 'white' }}>
          <Parallax width={500} height={400} xPos={700}>
            <Text small color={Colors.White} textAlign={'right'}>
              {FirstSectionDescription}
            </Text>
          </Parallax>
        </div>
        <div style={{ flex: 1 }}>
          <Parallax width={500} height={400} xPos={-700}>
            <Text lineHeight={'35px'} large color={Colors.White} textAlign={'left'} style={{ marginRight: 80 }}>
              {FirstSectionTitle}
            </Text>
          </Parallax>
        </div>
      </div>
      <div style={{ height: 800 }}>
        <AllToRight />
        <FromRight />
        <Skills />

        {/* <DigitalArtPanel />

        <DigitalArtPanel />
        <DigitalArtPanel /> */}
      </div>

      <Footer />
    </>
  );
};

export default AboutMe;
