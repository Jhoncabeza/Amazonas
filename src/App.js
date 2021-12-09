import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;