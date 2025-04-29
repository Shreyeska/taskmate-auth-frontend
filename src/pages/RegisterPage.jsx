import React, { useState } from "react";
import Eye from "../assets/icons/Eye.svg";
import EyeSlash from "../assets/icons/EyeSlash.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/TM full.png";
import api from "../network/api";
import "../assets/scss/main.scss";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Mock validation - replace with real API call later
    if (!username || !password) {
      toast.error("Please enter both username and password");
      return;
    }
    try {
      const response = await api.post(
        "/auth/register",
        {
          username: username.trim(),
          password: password.trim(),
        },
        {
          withCredentials: true,
        }
      );

      toast.success(response.data.message);

      // Redirect to login page after register
      navigate("/login");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Registration failed. Please try again.";
      if (errorMessage === "User already exists") {
        toast.error("Username already exists");
      } else {
        toast.error("Username already exists");
      }
      //   toast.error("User already exists");
    }
  };

  return (
    <div className="login-container">
      <header className="header">
        <img src={logo} alt="Task Manager Logo" className="logo" />
      </header>
      <div className="login-box">
        <h2>Sign up</h2>

        <form onSubmit={handleRegister}>
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
          {error && <div className="error-message"></div>}

          <button type="submit" className="login-button">
            Sign up
          </button>
          <p>
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
