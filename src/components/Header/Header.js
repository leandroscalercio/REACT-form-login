import React from 'react';
import logo from '../../assets/compassuol-logo-black.png';
import { HeaderHome, Logo, Container } from './Header.styled';

import Data from './Data/Data';
import Hora from './Hora/Hora';
import API from './API/API';

const Header = () => {
  return (
    <HeaderHome>
      <Logo src={logo}></Logo>
      <Container>
        <Hora />
        <Data />
      </Container>
      <API />
    </HeaderHome>
  );
};

export default Header;
