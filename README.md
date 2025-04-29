# TaskMate Frontend

A responsive React-based frontend for user authentication and task management.

## Features

- User registration & login
- Secure API communication with backend
- Toast notifications for success and error messages
- Password visibility toggle
- React Router navigation
- Responsive design with SCSS

## Tech Stack

- **Frontend**: React.js + Vite
- **Routing**: React Router
- **UI**: SCSS + Custom Components
- **Notifications**: react-toastify
- **API Calls**: Axios

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Shreyeska/taskmate-auth-frontend.git
cd taskmate-auth-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a .env file in the root directory:

```bash
# .env
VITE_API_BASE_URL=http://localhost:1234
```

### 4. Add .env, node_modules to .gitignore

```bash
# .gitignore
.env
/node_modules
```

### 5. Run the Frontend Server

```bash
npm run dev
```
