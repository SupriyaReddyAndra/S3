import React, { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.identifier || !formData.password) {
      setErrors("Please fill all fields");
      return;
    }

    alert("Login Successful (Demo)");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center  bg-gradient-to-r from-pink-500 via-purple-500 via-yellow-500 via-blue-500 to-red-500">
      {/* Login Box */}
      <div className="w-full max-w-sm bg-white border border-gray-300 p-8 rounded-lg shadow-sm mb-3">
        {/* Instagram Logo */}
        <h1 className="text-center text-4xl font-serif mb-7">Instagram</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="identifier"
            placeholder="Phone number, username, or email"
            value={formData.identifier}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />

          {errors && (
            <p className="text-red-500 text-sm text-center">{errors}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600"
          >
            Log in
          </button>
        </form>

        {/* OR Line */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm font-semibold">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Facebook Login */}
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="fb"
            className="w-5"
          />
          <p className="text-blue-700 font-semibold text-sm">
            Log in with Facebook
          </p>
        </div>

        {/* Forgot Password */}
        <p className="text-center text-blue-700 text-sm mt-3 cursor-pointer">
          Forgot password?
        </p>
      </div>

      {/* Sign Up Box BELOW LOGIN BOX */}
      <div className="w-full max-w-sm bg-white border border-gray-300 py-4 rounded-lg shadow-sm text-center">
        <p className="text-sm">
          Don't have an account?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
