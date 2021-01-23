import React, { useState } from 'react';
import styled from 'styled-components';
import './Button.css';

const styles = ['btn--primary', 'btn--outline'];
const sizes = ['btn--medium', 'btn--large'];

interface ButtonProps {
  children?: any;
  type?: any;
  onClick?: any;
  buttonStyle?: any;
  buttonSize?: any;
}
export const Button = ({ children, type, onClick, buttonStyle, buttonSize }: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  // if button has style or not already
  const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];
  const checkButtonSize = styles.includes(buttonSize) ? buttonStyle : sizes[0];

  const handleClick = (): void => {
    console.log('clicked');
    setIsClicked(!isClicked);
  };

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
