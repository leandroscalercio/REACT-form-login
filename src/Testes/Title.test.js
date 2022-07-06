import ReactDOM from 'react-dom';
import React from 'react';
import Title from '../components/Title/Title';

it('renders without crashing', () => {
  const div = document.createElement('title');

  ReactDOM.render(<Title />, div);
});
