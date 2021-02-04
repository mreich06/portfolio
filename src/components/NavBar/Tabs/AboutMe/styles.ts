import styled from 'styled-components';
import { motion } from 'framer-motion';

export const styles = {
  display: {
    display: 'inline-block',
    overflow: 'hidden',
  },
  titleStyle: {
    fontSize: 40,
  },
  descriptionStyle: {
    fontSize: 20,
  },
};

export const Display = styled.div`
  display: inline-block;
  overflow: hidden;
`;

export const Title = styled.div`
  font-size: 40;
`;

// change - make default text color white
export const Intro = styled.h1`
  color: white;
`;

export const IntroContainer = styled.div`
  margin-top: 50px;
  margin-left: 100px;
`;

export const Margin = styled.div`
  margin-top: 200px;
  margin-right: 100px;
  float: right;
  text-align: right;
  width: 400px;
`;

export const MotionList = styled(motion.ol)`
  margin: 20px;
`;
