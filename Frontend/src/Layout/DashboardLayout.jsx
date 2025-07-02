import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Sidebar */}
      <div className="z-40">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col relative z-10">
        <div className="sticky top-0 z-20">
          <Navbar />
        </div>
        <main className="flex-1 px-4 py-6 bg-white overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
