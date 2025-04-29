import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./createTask.css";
import api from "../network/api";
import "../assets/scss/main.scss";
// const apiURL = process.env.REACT_APP_API_URL;

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(
        "/tasks",
        { title, description },
        {
          withCredentials: true,
        }
      );
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        // If the error response exists, display the message sent from the backend
        console.log("Registration error:", error.response.data.message);
      } else {
        console.log("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="create-task">
  <div className="create-task-header">
    <h1 className="create-task-title">Create New Task</h1>
  </div>

  <div className="create-task-container">
    <form onSubmit={handleSubmit} className="create-task-form">
      <div className="form-group">
        <label htmlFor="title" className="form-label">Task Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">Task Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          className="form-textarea"
        />
      </div>

      <div className="form-buttons">
        <button
          type="button"
          className="btn cancel-btn"
          onClick={() => navigate("/dashboard")}
        >
          Cancel
        </button>
        <button type="submit" className="btn submit-btn">
          Create Task
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default AddTask;
