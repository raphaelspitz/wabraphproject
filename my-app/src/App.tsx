import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/contact" element={<Contact  />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
