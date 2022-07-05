import React from 'react';
import Form from '../../components/Form/Form';
import Logo from '../../components/Logo/Logo';

import {
  Container,
  LoginArea,
  LoginContent,
  Title,
  Paragraph,
  LoginImage,
} from './Login.styled';

const Login = () => {
  return (
    <Container>
      <LoginArea>
        <LoginContent>
          <Logo />
          <Title>Olá,</Title>
          <Paragraph>
            Para continuar navegando de forma segura, efetue o login na rede.
          </Paragraph>
          <Form />
        </LoginContent>
      </LoginArea>
      <LoginImage>
        <div>
          <Logo />
        </div>
      </LoginImage>
    </Container>
  );
};

export default Login;
