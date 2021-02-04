import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const FooterContent = styled.div`
  /* display: flex; */
  align-items: center;
  justify-content: center;
  align-self: center;
  background: linear-gradient(90deg, rgb(110, 94, 254) 0%, rgba(73, 63, 252, 1) 100%);
  height: 400px;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 100px;
`;

export const Icons = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 1em;
  background-color: #58b5cc;
`;

export const Icon = styled.div`
  display: flex;
`;

export const IconMargin = styled.div`
  margin: 70;
  flex: 1;
`;

export const IconMotionList = styled(motion.ol)`
  align-items: center;
  justify-content: center;
  list-style-type: none;
  display: flex;
`;
