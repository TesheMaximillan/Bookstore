import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Books from './pages/Books';
import NavBar from './pages/NavBar';
import NotMatch from './pages/NoMatch';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
