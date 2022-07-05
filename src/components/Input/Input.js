import React from 'react';
import { InputLogin } from './Input.styled';

import { useContext } from 'react';
import { LoginContext } from '../../AuthContext/AuthContext';

const Input = (props) => {
  const { nValidacao } = useContext(LoginContext);
  return <InputLogin border={nValidacao} {...props} />;
};

export default Input;
