import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

const Home = () => <div className="page">Welcome to the Podcast!</div>;
const Episodes = () => <div className="page">Here are our episodes...</div>;
const About = () => <div className="page">About the podcast...</div>;
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