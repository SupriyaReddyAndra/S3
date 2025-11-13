import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/authslice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy px-6">
      <div className="bg-white p-8 rounded-lg text-center">
        <h1 className="text-2xl font-semibold text-navy">Welcome to the Home Page</h1>
        <p className="mt-4 text-gray-600">You are logged in.</p>
        <button onClick={handleLogout} className="mt-6 bg-red-600 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </div>
  );
}
