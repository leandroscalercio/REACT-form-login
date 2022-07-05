import React from 'react';

import { Hour } from './Hora.styled';

const Hora = () => {
  const hour = new Date().getHours();
  const minutes = `0${new Date().getMinutes()}`.slice(-2);
  return (
    <Hour>
      {hour}:{minutes}
    </Hour>
  );
};

export default Hora;
