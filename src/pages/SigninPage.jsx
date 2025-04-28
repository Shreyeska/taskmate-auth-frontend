import React, { useState } from "react";
import Eye from "../assets/icons/Eye.svg";
import EyeSlash from "../assets/icons/EyeSlash.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/TM full.png";
// import "../assets/scss/main.scss";

import "../assets/scss/main.scss";

const SigninPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Mock validation - replace with real API call later
    if (!username || !password) {
      toast.error("Please enter both username and password");
      return;
    }

    // Mock successful login
    toast.success("Login successful (mock)");
    console.log("Mock login with:", { username, password });

    // Mock navigation
    setTimeout(() => {
      navigate("/dashboard"); // Redirect to dashboard after "login"
    }, 1500);

    /* 
      REAL IMPLEMENTATION (COMMENTED OUT)
      try {
        const response = await api.post("user/login", { username, password });
        const { token } = response.data.data;
        // ... rest of your auth logic
      } catch (error) {
        toast.error("Invalid Username or Password.");
      }
      */
  };

  return (
    <div className="login-container">
      <header className="header">
        <img src={logo} alt="Task Manager Logo" className="logo" />
      </header>
      <div className="login-box">
        <h2>Sign in</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group password-container">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="password-eye" onClick={togglePasswordVisibility}>
              <img
                src={showPassword ? EyeSlash : Eye}
                alt="Toggle password visibility"
              />
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">
            Sign in
          </button>
          <p>
            Don’t have an account? <a href="/register">Create now</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
