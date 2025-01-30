import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/home';
import Episodes from './pages/episodes'; 
import About from './pages/about';

// const Subscribe = () => <div className="page">Subscribe to our podcast!</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/subscribe" element={<Subscribe />} /> */}
      </Routes>
    </Router>
  );
};

export default App;