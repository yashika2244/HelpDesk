

import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import { FiFileText, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const Dashboard = () => {
  const cards = [
    {
      title: "Total Tickets",
      value: 24,
      icon: <FiFileText size={28} className="text-rose-500" />,
      bg: "from-rose-100 via-pink-100 to-purple-100",
      text: "text-rose-600",
    },
    {
      title: "Open Tickets",
      value: 10,
      icon: <FiAlertCircle size={28} className="text-pink-500" />,
      bg: "from-pink-100 via-pink-50 to-purple-50",
      text: "text-pink-600",
    },
    {
      title: "Closed Tickets",
      value: 14,
      icon: <FiCheckCircle size={28} className="text-purple-500" />,
      bg: "from-purple-100 via-rose-50 to-white",
      text: "text-purple-600",
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-600 mb-8 text-center">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-2 sm:px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-md bg-gradient-to-br ${card.bg} transition-transform hover:scale-[1.02]`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
              {card.icon}
            </div>
            <p className={`text-4xl font-bold ${card.text}`}>{card.value}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

