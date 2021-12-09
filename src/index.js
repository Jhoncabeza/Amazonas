import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  html{
    margin: 0;
    padding: 0;
    font-family: "Amazon Ember",Arial,sans-serif;
  }
`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
