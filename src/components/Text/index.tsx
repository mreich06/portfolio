import React from 'react';
import { getFontSize, getFontWeight } from './utils';
import { Colors } from './values';
import './styles.css';
interface TextProps {
  children?: React.ReactNode;
  style?: any; // change
  body?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  light?: boolean;
  bold?: boolean;
  link?: boolean;
  color?: string;
  lineHeight?: string;
  textAlign?: any;
}

const Text = ({
  children,
  style,
  body = false,
  small = false,
  medium = false,
  large = false,
  light = false,
  bold = false,
  link = false,
  color = Colors.White,
  lineHeight = '35px',
  textAlign = 'center',
}: TextProps): JSX.Element => {
  const element = React.createElement('h1', { className: 'greeting' }, 'Hi');
  const fontSize: number = getFontSize(small, medium, large, link, body);
  const fontWeight: any = getFontWeight(light, bold);
  return (
    <div style={style} className="text-container">
      <h1 style={{ color, fontSize, lineHeight, textAlign, fontWeight }}>{children}</h1>
    </div>
  );
};

export default Text;
