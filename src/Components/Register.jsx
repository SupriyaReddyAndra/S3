import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function Registration() {
const [formData, setFormData] = useState({
fullName: '',
email: '',
phone: '',
password: '',
confirmPassword: '',
profile: null,
});

const [errors, setErrors] = useState({});
const [preview, setPreview] = useState(null);
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const handleChange = (e) => {
const { name, value, files } = e.target;
if (name === 'profile') {
setFormData({ ...formData, profile: files[0] });
setPreview(URL.createObjectURL(files[0]));
} else {
setFormData({ ...formData, [name]: value });
}
};

const validate = () => {
const newErrors = {};
if (!formData.fullName) newErrors.fullName = 'Full name is required';
if (!formData.email) newErrors.email = 'Email is required';
if (!formData.phone) newErrors.phone = 'Phone is required';
if (!formData.password) newErrors.password = 'Password is required';
if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
if (!formData.profile) newErrors.profile = 'Profile picture is required';
return newErrors;
};

const handleSubmit = (e) => {
e.preventDefault();
const validationErrors = validate();
if (Object.keys(validationErrors).length === 0) {
console.log('Registration Data:', formData);
alert('Registration Successful!');
setFormData({
fullName: '',
email: '',
phone: '',
password: '',
confirmPassword: '',
profile: null,
});
setPreview(null);
setErrors({});
} else {
setErrors(validationErrors);
}
};

return ( <div className="w-full min-h-screen flex flex-col items-center justify-center  bg-gradient-to-b bg-gradient-to-r from-pink-400 via-purple-500 via-yellow-500 via-blue-500 to-red-400"> <div className="bg-white p-8 rounded shadow-md w-full max-w-md"> <h2 className="text-2xl font-bold mb-6 text-center">Register</h2> <form onSubmit={handleSubmit} className="flex flex-col gap-4">


      {/* Profile Upload Circle */}
      <div className="flex justify-center mb-4">
        <label className="cursor-pointer">
          <div className="w-28 h-28 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden bg-gray-200">
            {preview ? (
              <img src={preview} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500"> Profile</span>
            )}
          </div>
          <input
            type="file"
            name="profile"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </label>
      </div>
      {errors.profile && <p className="text-red-500 text-sm text-center">{errors.profile}</p>}

      <div>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      {/* Password Field */}
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded pr-10"
        />
        <span
          className="absolute right-2 top-2 text-gray-500 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
        </span>
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      {/* Confirm Password Field */}
      <div className="relative">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Re-enter password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded pr-10"
        />
        <span
          className="absolute right-2 top-2 text-gray-500 cursor-pointer"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
        </span>
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Register
      </button>
    </form>
  </div>
</div>


);
}
