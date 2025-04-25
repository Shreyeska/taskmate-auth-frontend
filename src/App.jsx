import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import NotFound from './pages/NotFound';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
