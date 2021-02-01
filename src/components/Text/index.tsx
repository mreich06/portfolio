import React from 'react';
import { getFontSize } from './utils';
import { Colors } from './values';

interface TextProps {
  children?: React.ReactNode;
  style?: any; // change
  body?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  light?: boolean;
  link?: boolean;
  color?: string;
  lineHeight?: string;
}

const Text = ({
  children,
  style,
  body = false,
  small = false,
  medium = false,
  large = false,
  light = false,
  link = false,
  color = Colors.White,
  lineHeight = '35px',
}: TextProps): JSX.Element => {
  const element = React.createElement('h1', { className: 'greeting' }, 'Hi');
  const textSize: number = getFontSize(small, medium, large, link, body);
  return (
    <div style={style}>
      <h1 style={{ color, fontSize: textSize, lineHeight }}>{children}</h1>
    </div>
  );
};

export default Text;
