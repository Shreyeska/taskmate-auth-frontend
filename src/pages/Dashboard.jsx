import React, { useState, useEffect } from "react";
import "../assets/scss/main.scss";
import api from "../network/api";
import Logout from "../assets/icons/Logout.svg";
import Delete from "../assets/icons/Delete.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import AddTask from "../components/AddTask";

const Dashboard = () => {
  const [loading, setLoading] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch tasks from backend
    const fetchTasks = async () => {
      // const token = getCookie("token");

      // if (!token) {
      //   navigate("/login");
      //   return;
      // }
      try {
        const response = await api.get("/tasks", { withCredentials: true });
        console.log(response); // Log the response to check the data
        setTasks(response.data); // Assuming tasks are in the response.data
      } catch (error) {
        console.error("Error fetching tasks:", error);
        if (error.response?.status === 401) {
          navigate("/auth/login");
        }
      } finally {
        setLoading(false); // Stop loading after fetching tasks
      }
    };

    fetchTasks();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };
  const handleDelete = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`, { withCredentials: true });
      // Update the state to remove the deleted task
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Failed to delete task:", error);
      alert("Failed to delete task. Please try again.");
    }
  };
  const handleAddTask = () => {
    navigate("/add-task"); // or whatever route you defined for AddTask
  };
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Task Dashboard</h1>
        <div className="logout" onClick={handleLogout}>
          <img src={Logout} alt="Logout" />
        </div>
      </div>

      <div className="dashboard-container">
        {loading ? (
          <p>Loading</p>
        ) : tasks.length === 0 ? (
          <div className="no-task">
            <div className="empty-task">
              <p> You have no tasks. </p>
            </div>
          </div>
        ) : (
          <>
            <div className="task-list">
              {tasks.map((task) => (
                <div key={task.id} className="task-item">
                  <div className="task-item-content">
                    <div className="task-info">
                      <h3 className="task-title">{task.title}</h3>
                      <p className="task-desc">{task.description}</p>
                    </div>
                    <div
                      onClick={() => handleDelete(task.id)}
                      className="delete-button"
                    >
                      <img src={Delete} alt="Delete" className="delete-icon" />
                    </div>
                  </div>
                  <hr className="task-separator" />
                </div>
              ))}
            </div>
          </>
        )}
        <div className="add-task">
          {/* <Link to="/create-tasks"> */}
          <button type="submit" className="add-task" onClick={handleAddTask}>
            Add a new task
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
