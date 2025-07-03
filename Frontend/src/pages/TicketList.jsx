import React, { useState } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import { useParams } from "react-router-dom";

const tickets = [
  {
    id: "HD-1001",
    subject: "Login issue",
    category: "Bug",
    status: "Open",
    createdAt: "2025-06-30",
  },
  {
    id: "HD-1002",
    subject: "Feature request for dark mode",
    category: "Feature Request",
    status: "In Progress",
    createdAt: "2025-06-28",
  },
  {
    id: "HD-1003",
    subject: "App crashes on mobile",
    category: "Bug",
    status: "Closed",
    createdAt: "2025-06-27",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Open":
      return "text-green-600 bg-green-100";
    case "In Progress":
      return "text-yellow-700 bg-yellow-100";
    case "Closed":
      return "text-red-600 bg-red-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

const TicketList = () => {
  const { type } = useParams();
  const [selectedTicket, setSelectedTicket] = useState(null);

  const filteredTickets =
    !type || type === "total"
      ? tickets
      : tickets.filter((t) => t.status?.toLowerCase() === type?.toLowerCase());

  const heading =
    !type || type === "total"
      ? "All Tickets"
      : `${type?.charAt(0).toUpperCase() + type?.slice(1)} Tickets`;

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:py-6">
        <h1 className="text-3xl font-extrabold text-center text-rose-600 mb-8">
          {heading}
        </h1>

        {/* Mobile Cards */}
        <div className="space-y-4 md:hidden">
          {filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => setSelectedTicket(ticket)}
              className="bg-white rounded-xl shadow p-4 border border-rose-100 cursor-pointer hover:bg-rose-50 transition"
            >
              <div className="text-sm font-semibold text-gray-800 mb-1">
                Ticket ID: <span className="text-rose-500">{ticket.id}</span>
              </div>
              <div className="text-sm text-gray-700">
                Subject: {ticket.subject}
              </div>
              <div className="text-sm text-gray-700">
                Category: {ticket.category}
              </div>
              <div className="text-sm text-gray-700">
                Status:{" "}
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    ticket.status
                  )}`}
                >
                  {ticket.status}
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Created: {ticket.createdAt}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto bg-white/80 backdrop-blur border border-rose-100 rounded-2xl shadow-lg">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-rose-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Ticket ID</th>
                <th className="px-6 py-3">Subject</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Created</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map((ticket, idx) => (
                <tr
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket)}
                  className={`border-t cursor-pointer transition ${
                    idx % 2 === 0 ? "bg-white" : "bg-rose-50/50"
                  } hover:bg-rose-100/40`}
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {ticket.id}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{ticket.subject}</td>
                  <td className="px-6 py-4 text-gray-600">{ticket.category}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full font-semibold text-xs ${getStatusStyle(
                        ticket.status
                      )}`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {ticket.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Modal Popup */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm  items-center justify-center z-50 px-4  md:flex hidden">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setSelectedTicket(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-rose-500 text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-rose-600 mb-4">
              Ticket Details
            </h2>
            <div className="space-y-2 text-sm">
              <div>
                <strong>ID:</strong> {selectedTicket.id}
              </div>
              <div>
                <strong>Subject:</strong> {selectedTicket.subject}
              </div>
              <div>
                <strong>Category:</strong> {selectedTicket.category}
              </div>
              <div>
                <strong>Status:</strong>{" "}
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    selectedTicket.status
                  )}`}
                >
                  {selectedTicket.status}
                </span>
              </div>
              <div>
                <strong>Created:</strong> {selectedTicket.createdAt}
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default TicketList;
