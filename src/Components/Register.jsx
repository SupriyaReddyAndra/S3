import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FiUpload, FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/authSlice";
import { toast } from "react-toastify";
import PasswordStrength from "../components/PasswordStrength";



export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector(s => s.auth);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photoBlob, setPhotoBlob] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => { if (error) toast.error(error); }, [error]);

  const validate = () => {
    if (!fullName || !email || !password || !confirmPassword) { toast.error("All fields are required."); return false; }
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(email)) { toast.error("Enter a valid email address."); return false; }
    const passRx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!passRx.test(password)) { toast.error("Password must be min 8 chars including uppercase, lowercase, number & special char."); return false; }
    if (password !== confirmPassword) { toast.error("Passwords do not match."); return false; }
    return true;
  };

  const handleImageChange = (e) => {
    const f = e.target.files[0];
    if (f) {
      // store file (blob) to send and create preview
      setPhotoBlob(f);
      setPreviewUrl(URL.createObjectURL(f));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(registerUser({ fullName, email, phone, password, photoBlob }))
      .unwrap()
      .then(() => {
        toast.success("Registration successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err || "Registration failed");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy px-6">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-lg p-8 md:p-10 relative">
          <Link to="/" className="absolute top-6 left-6  text-gray-600"><FaArrowLeft size={18} /></Link>

          <h2 className="text-2xl font-semibold text-blue mb-6 ">Register</h2>

          <div className="flex items-center justify-end mb-6">
            {/* Upload circle: icon replaced by preview (cover) when image selected */}
            <label className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-200 cursor-pointer overflow-hidden">
              {previewUrl ? (
                <img src={previewUrl} alt="preview" className="w-full h-full object-cover" />
              ) : (
                <FiUpload size={22} className="text-navy-700" />
              )}
              <input id="photo" type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleImageChange} />
            </label>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:w-96">
            <input type="text" placeholder="Enter your full name" className="w-full p-2 rounded bg-lightGrayInput border-2 text-sm" value={fullName} onChange={e => setFullName(e.target.value)} />
            <input type="email" placeholder="Enter your email address" className="w-full p-2 rounded bg-lightGrayInput border-2 text-sm" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="Enter your phone number" className="w-full p-2 rounded bg-lightGrayInput  border-2 text-sm" value={phone} onChange={e => setPhone(e.target.value)} />

            <div className="relative">
              <input type={showPwd ? "text" : "password"} placeholder="Enter your password" className="w-full p-2 rounded bg-lightGrayInput border-2 text-sm" value={password} onChange={e => setPassword(e.target.value)} />
              <button type="button" onClick={() => setShowPwd(s => !s)} className="absolute right-2 top-1/4 -translate-y-1/2 text-navy-600">
                {showPwd ? <FiEyeOff /> : <FiEye />}
              </button>
              <PasswordStrength password={password} />
            </div>

            <div className="relative">
              <input type={showConfirm ? "text" : "password"} placeholder="Re-Enter your password" className="w-full p-2 rounded bg-lightGrayInput border-2 text-sm" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              <button type="button" onClick={() => setShowConfirm(s => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600">
                {showConfirm ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="flex items-center justify-between bg-navy">
              <div className="text-sm text-navy-700"><Link to="/" className="text-navy">Sign in instead</Link></div>
              <div><button type="submit" disabled={isLoading} className="bg-white text-navy py-2 px-4 rounded">{isLoading ? "Registering..." : "Register"}</button></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
