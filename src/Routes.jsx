import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Register from "./Components/Register";
import Home from "./components/Home";
import Signup from "./Components/Signup";

const AppRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
         <Route path="/signup" element={!isAuthenticated ? <Signup /> : <Navigate to="/home" />} />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/home" />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/home" />} />
        <Route path="/home" element={!isAuthenticated ? <Home /> : <Navigate to="/home" />} />
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
