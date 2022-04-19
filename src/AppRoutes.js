import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
    )
}

