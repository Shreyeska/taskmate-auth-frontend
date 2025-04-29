// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useEffect } from "react";

// const PrivateRoute = ({ children }) => {
//   const { user } = useAuth();

//   useEffect(() => {
//     if (!user) {
//       console.log("Unauthorized user");
//     }
//   }, [user]);

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default PrivateRoute;
