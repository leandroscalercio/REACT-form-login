import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FooterLogin,
  FooterRefreshTimer,
  FooterRefresh,
  Timer,
  Seconds,
  BtnNavegar,
  BtnLogout,
  Container,
  Paragraph,
  ParagraphTimer,
} from './Footer.styled';

const Footer = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(300);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    if (seconds === 0) {
      navigate('/');
    }
    return () => clearInterval(intervalo);
  }, [seconds, navigate]);

  const Continues = () => {
    setSeconds(30);
  };

  const Logout = () => {
    localStorage.removeItem('usuario');
    localStorage.removeItem('password');
    navigate('/');
  };

  return (
    <FooterLogin>
      <Paragraph>
        Essa janela do navegador é usada para manter sua sessão de autenticação
        ativa. Deixe-a aberta em segundo plano e abra uma nova janela para
        continuar a navegar.
      </Paragraph>
      <FooterRefresh>
        <ParagraphTimer>Application refresh in</ParagraphTimer>
        <FooterRefreshTimer>
          <Timer> {seconds}</Timer>
          <Seconds>seconds </Seconds>
        </FooterRefreshTimer>
      </FooterRefresh>
      <Container>
        <BtnNavegar onClick={Continues}>Continuar Navegando</BtnNavegar>
        <BtnLogout onClick={Logout}>Logout</BtnLogout>
      </Container>
    </FooterLogin>
  );
};

export default Footer;
