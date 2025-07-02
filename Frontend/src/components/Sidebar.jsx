import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiHome, FiPlusSquare, FiList, FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FiHome /> },
    { name: "Create Ticket", path: "/create-ticket", icon: <FiPlusSquare /> },
    { name: "Tickets", path: "/tickets", icon: <FiList /> },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* Topbar for Mobile */}
      <div className="md:hidden flex items-center justify-between bg-gradient-to-r from-rose-100 via-pink-100 to-purple-100 backdrop-blur-md px-4 py-3 border-b border-rose-100 shadow-sm sticky top-0 z-50">
        <h2 className="text-xl font-bold text-rose-600">HelpDesk</h2>
        <button onClick={toggleSidebar} className="text-2xl text-rose-600">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-gradient-to-b from-rose-100 via-pink-100 to-purple-100 backdrop-blur-md border-r border-white/30 shadow-xl transform transition-transform duration-300 md:static md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">
            Help<span className="text-rose-500">Desk</span>
          </h2>

          <nav className="space-y-3">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeSidebar}
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white text-rose-600 shadow font-semibold"
                      : "text-gray-700 hover:bg-white/70 hover:text-rose-500"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Logout for mobile */}
          {user && (
            <button
              onClick={handleLogout}
              className="mt-10 w-full block md:hidden bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm py-2 rounded-lg font-semibold shadow hover:opacity-90 transition"
            >
              Logout
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
