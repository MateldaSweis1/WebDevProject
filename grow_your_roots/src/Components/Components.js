import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import UserProfile from "./User/User";
import Home from "./PlantHome/PlantHome";
import Header from "./Header/Header";

const Components = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<UserProfile/>} />
      </Routes>
      <Header />
    </Router>
  );
};

export default Components;
