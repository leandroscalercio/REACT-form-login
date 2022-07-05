import React from 'react';
import error from '../../assets/error.png';

import { Error404, Title, Container } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <div>
        <Title>
          <span>P</span>
          <span>A</span>
          <span>G</span>
          <span>E</span>
          <span>&nbsp;</span>
          <span>N</span>
          <span>O</span>
          <span>T</span>
          <span>&nbsp;</span>
          <span>F</span>
          <span>O</span>
          <span>U</span>
          <span>N</span>
          <span>D</span>
        </Title>
      </div>

      <Error404 src={error} alt="" />
    </Container>
  );
};

export default NotFound;
