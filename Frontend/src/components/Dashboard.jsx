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

  const recentTickets = [
    { id: "HD-1003", subject: "App crash issue", status: "Open" },
    { id: "HD-1002", subject: "Dark mode request", status: "In Progress" },
    { id: "HD-1001", subject: "Login not working", status: "Closed" },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      case "Closed":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-pink-50 pb-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-600 mb-10 text-center pt-8">
          Dashboard Overview
        </h1>

        {/* Ticket Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-2 sm:px-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-md bg-gradient-to-br ${card.bg} transition-transform hover:scale-[1.02]`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-700">
                  {card.title}
                </h2>
                {card.icon}
              </div>
              <p className={`text-4xl font-bold ${card.text}`}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Chart Placeholder */}
        <div className="max-w-6xl mx-auto mt-12 px-2 sm:px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Ticket Activity
          </h2>
          <div className="rounded-xl bg-white shadow p-6 text-center text-gray-500">
            📊 Chart Coming Soon...
          </div>
        </div>

        {/* Recent Tickets */}
        <div className="max-w-6xl mx-auto mt-12 px-2 sm:px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Tickets
          </h2>
          <ul className="space-y-4">
            {recentTickets.map((ticket) => (
              <li
                key={ticket.id}
                className="p-4 bg-white rounded-xl shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-gray-700">
                    {ticket.subject}
                  </p>
                  <p className="text-sm text-gray-500">ID: {ticket.id}</p>
                </div>
                <span
                  className={`text-sm px-3 py-1 rounded-full font-medium ${getStatusStyle(
                    ticket.status
                  )}`}
                >
                  {ticket.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
