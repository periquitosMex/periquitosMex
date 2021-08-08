import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById('root')
);
