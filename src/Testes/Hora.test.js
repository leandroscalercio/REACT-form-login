import ReactDOM from 'react-dom';
import React from 'react';
import Hora from '../components/Header/Hora/Hora';

it('renders without crashing', () => {
  const div = document.createElement('hora');

  ReactDOM.render(<Hora />, div);
});
