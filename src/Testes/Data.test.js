import ReactDOM from 'react-dom';
import React from 'react';
import Data from '../components/Header/Data/Data';

it('renders without crashing', () => {
  const div = document.createElement('data');

  ReactDOM.render(<Data />, div);
});
