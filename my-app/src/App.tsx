import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/book-app/Navbar';
import BookApp from './components/book-app/BookApp';
import NetflixApp from './components/netflix-app/app/NetflixApp';
import NetflixShow from './components/pages/netflix/netflix-show/NetflixShow';

function App() {
  return (
    <div>
      <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<BookApp  />} />
          <Route path="/neflixapp" element={<NetflixApp  />} />
          <Route path="/netflix-show" element={<NetflixShow  />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
