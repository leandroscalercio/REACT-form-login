import ReactDOM from 'react-dom';
import React from 'react';
import Button from '../components/Button/Button';

it('renders without crashing', () => {
  const div = document.createElement('button');

  ReactDOM.render(<Button />, div);
});
