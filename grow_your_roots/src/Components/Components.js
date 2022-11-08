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

const Components = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute path="/" element={Home} /> }
        />
        <Route path="/users" element={
          <ProtectedRoute path="/users" element={UserProfile} /> } 
        />
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
};

export default Components;
