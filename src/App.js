import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './Main2/Main2';
import AboutUs from './AboutUs/AboutUs';
import Contacts from './Contacts/Contacts';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
