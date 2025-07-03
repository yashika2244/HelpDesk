
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
   toast.success("Logged out successfully!"); 
    navigate("/login");
  };

  return (
    <header className="w-full  hidden md:flex bg-white/80 backdrop-blur-md border-b border-rose-100 shadow-sm px-4 sm:px-6 md:px-10 py-3  items-center justify-between sticky top-0 z-50">
      {/* Left: Logo or Title */}
      <h2 className="text-xl sm:text-2xl font-extrabold text-rose-500 tracking-wide">
        Dashboard
      </h2>

      {/* Right: User Info + Logout */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="text-sm text-gray-700 hidden sm:inline">
          Welcome, <strong>{user.name}</strong>
        </span>

        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-rose-400 to-pink-500 text-white text-sm px-3 py-1.5 sm:px-4 rounded-md font-medium shadow hover:opacity-90 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
