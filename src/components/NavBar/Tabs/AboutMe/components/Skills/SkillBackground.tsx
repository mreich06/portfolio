import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BackgroundBox = styled(motion.li)`
  background: linear-gradient(rgb(16, 16, 16, 1), rgb(16, 16, 16, 0));
`;

interface SkillBackgroundProps {
  children: React.ReactNode;
}

const SkillBackground = ({ children }: SkillBackgroundProps): JSX.Element => {
  return <BackgroundBox>{children}</BackgroundBox>;
};

export default SkillBackground;
