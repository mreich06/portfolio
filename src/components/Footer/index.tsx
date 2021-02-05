import React, { Component, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useViewportScroll, motion, useTransform, useMotionValue, MotionStyle, AnimatePresence } from 'framer-motion';
import './styles.ts';
import Text from './../Text';
import { FooterTitle, FooterDescription } from '../../content/Footer';
import Parallax from '../Animation/Parallax';
import ContactIcons from './ContactIcons';
import { FooterContainer, FooterContent } from './styles';

const Footer = (): JSX.Element => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const variants = {
    visible: {},
    hidden: {},
  };
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <Parallax width={500} height={50} xPos={0}>
            <Text large bold textAlign={'center'}>
              {FooterTitle}
            </Text>
          </Parallax>
          <Parallax width={800} height={100} xPos={0}>
            <Text small textAlign={'center'}>
              {FooterDescription}
            </Text>
          </Parallax>
          <ContactIcons />
        </FooterContent>
      </FooterContainer>
    </>
  );
};

export default Footer;
