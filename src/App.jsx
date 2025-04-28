import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/SigninPage";
import Register from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import "./assets/scss/main.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
