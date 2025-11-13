import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, error } = useSelector(s => s.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => { if (error) toast.error(error); }, [error]);
  useEffect(() => { if (isAuthenticated) { toast.success("Login successful"); navigate("/home"); } }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) { toast.error("All fields are required."); return; }
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(email)) { toast.error("Enter a valid email address."); return; }
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy px-6">
      <div className="max-w-3xl w-full flex justify-center">
        <div className="bg-white rounded-lg drop-shadow-lg w-full max-w-md py-10 px-8" style={{ borderRadius: "10px" }}>
          <h2 className="text-xl font-semibold text-navy
           mb-8 text-center">Login Form</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="email"
                className="w-full bg-transparent border-b border-navy-300 focus:outline-none py-2 px-1 text-sm"
              />
            </div>

            <div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                type="password"
                className="w-full bg-transparent border-b border-navy-300 focus:outline-none py-2 px-1 text-sm"
              />
            </div>

            <div>
              <button type="submit" disabled={isLoading} className="w-full bg-navy text-navy py-2 rounded-sm">
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <div className="mt-4 text-xs text-center text-gray-500">
            <div>Forgot <span className="text-navy font-medium">Password?</span></div>
            <div className="mt-2">Don’t have an account? <Link to="/register" className="text-blue-700 font-medium">Register</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}
