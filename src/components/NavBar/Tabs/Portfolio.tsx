import React, { Component, Props, useState } from 'react';
import Text from './../../Text';
import TextField from '@material-ui/core/TextField';
import { rgbToHex } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import Parallax from '../../Animation/Parallax';
import MoveY from '../../Animation/Parallax/MoveY';
import { CenterItems } from '../../../utils/styles';
import styled from 'styled-components';
import FadeInMoveY from '../../Animation/Parallax/FadeInMoveY';
import EmmaWatson from '../../../images/portfolio_image_1.jpg';
import Painting from '../../../images/portfolio_image_2.jpg';
import Drawing from '../../../images/portfolio_image_3.jpg';
import _throttle from 'lodash.throttle';
import { BackgroundBox } from './AboutMe/components/Skills/SkillBackground';
import { useInView } from 'react-intersection-observer';
import PortfolioItemSection from './Portfolio/PortfolioItemSection';
import {
  ItemOneDate,
  ItemOneDescription,
  ItemOneTitle,
  ItemThreeDate,
  ItemThreeDescription,
  ItemThreeTitle,
  ItemTwoDate,
  ItemTwoTitle,
} from '../../../content/Portfolio';
import HalfTone from './../../../svgs/halftone-simple.svg';
import HalfToneSvg from './../../../svgs/HalfTone.svg';

export const Container = styled.div`
  min-height: 4000px;
  display: flex;
  flex-direction: column;
`;

export const Border = styled(motion.div)`
  width: 400px;
  height: 10px;
  background: linear-gradient(90deg, #b621fe, #1fd1f9);
  border-radius: 20px;
  /* flex: 1; */
`;

interface ShadowProps {
  width: string;
  height: string;
}
export const Shadow = styled.div<ShadowProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background: black;
  border-radius: 20;
  box-shadow: 0px 0px 30px 12px #000;
  display: flex;
  align-items: 'center';
  justify-content: 'center';
  align-content: 'center';
`;

interface ImageMotionProps {
  hoverVariantImage: any;
  src: any;
  height: number;
  width: number;
  shadowWidth: string;
  shadowHeight: string;
}

const ImageMotion = ({
  hoverVariantImage,
  src,
  height,
  width,
  shadowWidth,
  shadowHeight,
}: ImageMotionProps): JSX.Element => {
  return (
    <motion.div variants={hoverVariantImage} style={{ flex: 1 }}>
      <Shadow width={shadowWidth} height={shadowHeight}>
        <img src={src} height={height} width={width} style={{ borderRadius: 10, flex: 1 }} />
      </Shadow>
    </motion.div>
  );
};

const Portfolio = (): JSX.Element => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0.2, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
        ease: 'easeOut',
        duration: 1.5,
      },
    },
  };

  const hoverVariantImage = {
    notHover: { opacity: 0.8 },
    hover: {
      opacity: 1,
      translateX: -10,
    },
  };

  const hoverVariantText = {
    notHover: { opacity: 0.8 },
    hover: {
      opacity: 1,
      translateX: 15,
    },
  };

  const hoverVariantUnderline = {
    notHover: { width: 0, opacity: 0 },
    hover: {
      width: 400,
      opacity: 1,
      transition: { duration: 0.4, type: 'tween' },
    },
  };

  const svgVariants = {
    notHover: { opacity: 0 },
    hover: {
      opacity: 0.5,
      transition: { duration: 0.4, type: 'tween' },
    },
  };

  return (
    <Container>
      <motion.div variants={variants} initial="hidden" animate="visible">
        <motion.div initial="notHover" whileHover="hover" animate="notHover">
          <div style={{ position: 'relative', width: '100%' }}>
            <motion.div variants={svgVariants}>
              <img height={1200} width={700} src={HalfTone} style={{ transform: `rotate(270deg)` }} />
            </motion.div>
            <div
              style={{
                position: 'absolute',
                top: 260,
                left: 100,
                width: '100%',
              }}
            >
              <motion.div variants={variants}>
                <div style={{ display: 'flex', padding: 70 }}>
                  <ImageMotion
                    src={EmmaWatson}
                    height={512}
                    width={362}
                    shadowWidth={'362px'}
                    shadowHeight={'512px'}
                    hoverVariantImage={hoverVariantImage}
                  />
                  <motion.div variants={hoverVariantText} style={{ flex: 1 }}>
                    <PortfolioItemSection title={ItemOneTitle} date={ItemOneDate} description={ItemOneDescription} />
                    <Border variants={hoverVariantUnderline} />
                  </motion.div>
                  <div style={{ flex: 1 }}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={variants} ref={ref} animate={inView ? 'visible' : 'hidden'}>
          <motion.div initial="notHover" whileHover="hover" animate="notHover">
            <div style={{ position: 'relative', width: '100%', top: -600 }}>
              <motion.div variants={svgVariants} style={{ x: 1500 }}>
                <img height={1200} width={700} src={HalfTone} style={{ transform: `rotate(90deg)` }} />
              </motion.div>
              <div
                style={{
                  position: 'absolute',
                  top: 300,
                  left: -100,
                  width: '100%',
                }}
              >
                <motion.div variants={variants}>
                  <div style={{ display: 'flex', padding: 70 }}>
                    <div style={{ flex: 1 }}></div>
                    <motion.div variants={hoverVariantText} style={{ flex: 1 }}>
                      <PortfolioItemSection title={ItemTwoTitle} date={ItemTwoDate} description={ItemOneDescription} />
                      <Border variants={hoverVariantUnderline} />
                    </motion.div>

                    <ImageMotion
                      src={Painting}
                      height={423}
                      width={640}
                      shadowWidth={'680px'}
                      shadowHeight={'440px'}
                      hoverVariantImage={hoverVariantImage}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={variants} ref={ref2} animate={inView2 ? 'visible' : 'hidden'}>
          <motion.div initial="notHover" whileHover="hover" animate="notHover">
            <motion.div variants={variants}>
              <div style={{ display: 'flex', padding: 70 }}>
                <ImageMotion
                  src={Drawing}
                  height={384}
                  width={530}
                  shadowWidth={'362px'}
                  shadowHeight={'512px'}
                  hoverVariantImage={hoverVariantImage}
                />
                <motion.div variants={hoverVariantText} style={{ flex: 1 }}>
                  <PortfolioItemSection
                    title={ItemThreeTitle}
                    date={ItemThreeDate}
                    description={ItemThreeDescription}
                  />
                  <Border variants={hoverVariantUnderline} />
                </motion.div>

                <div style={{ flex: 1 }}></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Portfolio;
