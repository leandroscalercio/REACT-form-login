import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Container, SubTitle, Validacao } from './Form.styled';
import { useContext } from 'react';
import { LoginContext } from '../../AuthContext/AuthContext';

const Form = () => {
  const [usuario, setUsuario] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { login } = useContext(LoginContext);
  const { nValidacao } = useContext(LoginContext);

  const handleClick = (e) => {
    e.preventDefault();
    login(usuario, password);
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('password', password);
  };
  return (
    <Container>
      <SubTitle>Login</SubTitle>
      <Input
        type="text"
        placeholder="Usuário"
        id="usuario"
        value={usuario}
        onChange={({ target }) => setUsuario(target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        id="senha"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <Validacao visibility={nValidacao}>
        Ops, usuário ou senha inválidos. Tente novamente!
      </Validacao>
      <Button text="Continuar" onClick={handleClick} />
    </Container>
  );
};

export default Form;
