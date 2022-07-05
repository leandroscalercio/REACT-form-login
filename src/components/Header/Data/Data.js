import React from 'react';
import { DateDiv } from './Data.styled';

const Data = () => {
  const date = new Date();
  const actual = new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'full',
  }).format(date);

  return <DateDiv>{actual} </DateDiv>;
};

export default Data;
