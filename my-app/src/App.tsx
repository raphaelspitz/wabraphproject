import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home  />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
