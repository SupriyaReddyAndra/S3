import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../Slice";

const Register = () => {
  const dispatch=useDispatch()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
   
    dispatch(registerUserThunk(formData))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80 sm:w-96">
        <div className="flex items-center mb-4">
          <button className="text-gray-500 text-xl mr-2">&larr;</button>
          <h2 className="text-2xl font-semibold text-gray-800">Register</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* <div>
            <label className="block text-gray-600 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div> */}

          <div>
            <label className="block text-gray-600 text-sm mb-1">Photo</label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className="w-full text-gray-600 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;















