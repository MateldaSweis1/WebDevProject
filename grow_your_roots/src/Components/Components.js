import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import UserProfile from "./User/User";
import Home from "./PlantHome/PlantHome";
import AuthModule from "./Auth/Auth";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./Auth/ProtectedRoute";
import Profile from "./User/UserProfile";

// Root components page that includes all routes and protected routes for the app
const Components = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/users" element={
          <ProtectedRoute path="/users" element={UserProfile} /> } 
        />
        <Route path="/users/profile" element={
          <ProtectedRoute path="/users" element={Profile} /> } 
        />
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default Components;
