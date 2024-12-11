import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App =() => {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
