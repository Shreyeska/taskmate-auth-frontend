import React, { useState } from "react";
import "../assets/scss/main.scss";

import { Link } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState("");
  // const tasks = [
  //   {
  //     id: 1,
  //     title: "Finish project",
  //     description: "Complete all API endpoints.",
  //   },
  //   {
  //     id: 2,
  //     title: "Design homepage",
  //     description:
  //       "Work on the UI layout and color palette.Work on the UI layout and color palette.Work on the UI layout and color palette.Work on the UI layout and color palette.",
  //   },
  //   {
  //     id: 3,
  //     title: "Fix login bug",
  //     description: "Resolve authentication issue in production.",
  //   },
  //   {
  //     id: 4,
  //     title: "Prepare presentation",
  //     description: "Summarize project milestones for demo.",
  //   },
  //   {
  //     id: 5,
  //     title: "Refactor code",
  //     description: "Improve code readability and performance.",
  //   },
  // ];
  const tasks = [];
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Task Dashboard</h1>
      <div className="dashboard-container">
        {loading ? (
          <p>Loading</p>
        ) : tasks.length === 0 ? (
          <div className="no-task">
            <p> You have no tasks. </p>
            <div className="add-task">
              <button type="submit" className="add-task">
                Add a new task
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
