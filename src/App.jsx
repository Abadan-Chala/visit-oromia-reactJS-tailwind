import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Gallery from './pages/Gallery';

const App =() => {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/gallery" element={<Gallery/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
