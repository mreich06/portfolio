import styled from 'styled-components';
import { AnimatedTextProps } from './AnimatedText';

// export const DisplayStyle = styled.div`
//   font-size: ${props => (props.isTitle ? 40 : 20)};
//   display: inline-block;
//   overflow: hidden;
// `;

export const Display = styled.div<AnimatedTextProps>`
  display: inline-block;
  overflow: hidden;
`;
