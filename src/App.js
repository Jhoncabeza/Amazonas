import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import Detalle from './containers/Detalle';
import Main from './containers/Main';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';

const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    font-family: "Amazon Ember",Arial,sans-serif;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;