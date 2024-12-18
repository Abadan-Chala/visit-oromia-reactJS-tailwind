import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';
import Welcome from './component/Welcome.jsx';
import Login from './component/Login.jsx';

const App =() => {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/gallery" element={<Gallery/>}></Route>
        <Route path ="/contact" element={<Contact/>}></Route>
        <Route path ="/about" element={<About/>}></Route>
        <Route path ="/welcome" element={<Welcome/>}></Route>
        <Route path ="/login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
