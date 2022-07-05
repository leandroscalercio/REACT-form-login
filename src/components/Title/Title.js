import React from 'react';
import { Titles } from './Title.styled';

const Title = ({ as, children, fontSize, color }) => {
  return (
    <Titles fontSize={fontSize} as={as} color={color}>
      {children}
    </Titles>
  );
};

export default Title;
