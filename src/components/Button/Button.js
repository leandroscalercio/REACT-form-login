import React from 'react';

import { ButtonLogin } from './Button.styled';

const Button = ({ borderRadius, text, width, onClick, disabled }) => {
  return (
    <ButtonLogin
      disabled={disabled}
      borderRadius={borderRadius}
      onClick={onClick}
      width={width}
    >
      {text}
    </ButtonLogin>
  );
};

export default Button;
