import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/SigninPage";
import Register from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import "./assets/scss/main.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTask from "./components/addTask";
// import AddTask from "./components/AddTask";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" autoClose={3000} />
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              // <PrivateRoute>
              <Dashboard />
              // </PrivateRoute>
            }
          />
          <Route
            path="/add-task"
            element={
              // <ProtectedRoute>
              <AddTask />
              // </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
