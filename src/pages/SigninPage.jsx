import React, { useState } from "react";
import Eye from "../assets/icons/Eye.svg";
import EyeSlash from "../assets/icons/EyeSlash.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/TM full.png";
import api from "../network/api";
import "../assets/scss/main.scss";
import { useAuth } from "../context/AuthContext";

const SigninPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      toast.error("Please enter both username and password");
      setIsLoading(false);
      return;
    }

    try {
      // Make API call to login endpoint
      const response = await api.post(
        "/auth/login",
        {
          username: username.trim(),
          password: password.trim(),
        },
        {
          withCredentials: true,
        }
      );

      toast.success(response.data.message || "Login successful");

      navigate("/dashboard");
    } catch (error) {
      // Handle API errors
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
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

          <button
            type="submit"
            // onSubmit="handleSubmit"
            className="login-button"
          >
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
