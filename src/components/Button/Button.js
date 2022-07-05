import React from 'react';
import { ButtonLogin } from './Button.styled';

const Button = ({ text, onClick }) => {
  return <ButtonLogin onClick={onClick}>{text}</ButtonLogin>;
};

export default Button;
