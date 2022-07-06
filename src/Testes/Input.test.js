import ReactDOM from 'react-dom';
import React from 'react';
import Input from '../components/Input/Input';

it('renders without crashing', () => {
  const div = document.createElement('input');

  ReactDOM.render(<Input />, div);
});
