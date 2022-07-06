import React from 'react';
import { InputLogin } from './Input.styled';

import { useContext } from 'react';
import { LoginContext } from '../../AuthContext/AuthContext';

const Input = ({
  props,
  width,
  height,
  color,
  fontSize,
  borderRadius,
  background,
}) => {
  const nValidacao = useContext(LoginContext);
  return (
    <InputLogin
      borderRadius={borderRadius}
      fontSize={fontSize}
      color={color}
      height={height}
      background={background}
      width={width}
      border={nValidacao}
      {...props}
    />
  );
};

export default Input;
