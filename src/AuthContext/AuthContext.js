import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginContext = createContext();

export const AuthContext = ({ children }) => {
  const [validacao, setValidacao] = useState(false);

  const navigate = useNavigate();

  const login = (usuario, password) => {
    if (usuario === 'admin' && password === 'admin') {
      navigate('/home');
    } else {
      setValidacao(true);
    }
  };

  return (
    <LoginContext.Provider value={{ login, nValidacao: validacao }}>
      {children}
    </LoginContext.Provider>
  );
};
