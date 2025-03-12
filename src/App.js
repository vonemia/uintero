import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main2 from './components/Main2';
import AboutUs from './AboutCompany/AboutUs'; // Ensure the correct path to AboutUs
import Services from './Services/Services';
import Cases from './Cases/Cases';
import Contacts from './Contacts/Contacts';
import Blog from './Blog/Blog';
import BlogDetail from './BlogDetail/Blog';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main2 />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
