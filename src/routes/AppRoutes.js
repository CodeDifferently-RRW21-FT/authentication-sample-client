import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<ProtectedRoutes/>}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
            </Route>

            <Route path="/" element={<PublicRoutes/>}>
                <Route path="/login" element={<Login/>} />
            </Route>
        </Routes>
    )
}

