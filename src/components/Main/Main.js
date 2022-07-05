import React from 'react';
import Title from '../Title/Title.js';
import { Container, ContainerTexts, Paragraph } from './Main.styled';

const Main = () => {
  return (
    <Container>
      <ContainerTexts>
        <Title as={'h4'} fontSize="36px" color="tomato">
          Our mission is
        </Title>
        <Paragraph> Nossa missão é</Paragraph>
        <Title as={'h3'} fontSize="64px" color="blue">
          to transform the world
        </Title>
        <Paragraph> transformar o mundo</Paragraph>
        <Title as={'h2'} fontSize="64px">
          building digital experiences
        </Title>
        <Paragraph>construindo experiências digitais</Paragraph>
        <Title as={'h1'} fontSize="64px">
          that enable our client’s growth
        </Title>
        <Paragraph> que permitam o crescimento dos nossos clientes</Paragraph>
      </ContainerTexts>
    </Container>
  );
};

export default Main;
