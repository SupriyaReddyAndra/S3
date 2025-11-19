import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    fullName: "",
    username: "",
  });

  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.emailOrPhone ||
      !formData.password ||
      !formData.fullName ||
      !formData.username
    ) {
      setErrors("All fields are required");
      return;
    }

    alert("Account created successfully (Demo)");
  };

  return (
    <div className="w-full min-h-screen   bg-gradient-to-r from-pink-500 via-purple-500 via-yellow-500 via-blue-500 to-red-500 flex flex-col items-center justify-center p-3">
      
      {/* Main SignUp Box */}
      <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow-sm p-8 mb-4">
        
        {/* LOGO */}
        <h1 className="text-center text-4xl font-serif mb-3">Instagram</h1>

        <p className="text-center text-gray-600 text-sm mb-5">
          Sign up to see photos and videos <br /> from your friends.
        </p>

        {/* Facebook Button */}
        <button
          onClick={() => alert("Facebook Login (Demo)")}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-md font-semibold mb-4 hover:bg-blue-700"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="fb"
            className="w-4"
          />
          Log in with Facebook
        </button>

        {/* OR LINE */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm font-semibold">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Mobile Number or Email"
            value={formData.emailOrPhone}
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

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />

          {errors && (
            <p className="text-red-500 text-sm text-center">{errors}</p>
          )}

          <p className="text-xs text-gray-500 text-center px-3">
            People who use our service may have uploaded
            your contact information to Instagram.{" "}
            <span className="text-blue-700 cursor-pointer">Learn More</span>
          </p>

          <p className="text-xs text-gray-500 text-center px-3 mt-1">
            By signing up, you agree to our{" "}
            <span className="text-blue-700 cursor-pointer">Terms</span> ,{" "}
            <span className="text-blue-700 cursor-pointer">Privacy Policy</span>{" "}
            and{" "}
            <span className="text-blue-700 cursor-pointer">Cookies Policy</span>.
          </p>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold mt-2 hover:bg-blue-600"
          >
            Sign up
          </button>
        </form>
      </div>

      {/* Bottom Login Box */}
      <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow-sm py-4 text-center">
        <p className="text-sm">
          Have an account?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}
