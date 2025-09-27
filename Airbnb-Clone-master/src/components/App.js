import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
        <BrowserRouter>
        <Header />
      <Routes>

      <Route exact path="/search" element={<SearchPage/>} />
      <Route exact path="/" element={<Home/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
  
    </div>
  );
}

export default App;
