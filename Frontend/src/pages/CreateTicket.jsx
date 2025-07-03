import React, { useState, useEffect } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import { toast } from "react-toastify";
import { Trash2 } from "lucide-react"; 

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    subject: "",
    category: "",
    description: "",
  });

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: Date.now(),
      ...formData,
    };

    const updatedTickets = [...tickets, newTicket];
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
    setTickets(updatedTickets);

    toast.success("✅ Ticket Submitted!");
    setFormData({
      subject: "",
      category: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    const updated = tickets.filter((ticket) => ticket.id !== id);
    localStorage.setItem("tickets", JSON.stringify(updated));
    setTickets(updated);
    toast.info("🗑️ Ticket deleted");
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur border border-rose-100 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-rose-600 mb-6 text-center">
          Create New Ticket
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="Enter ticket subject"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              required
            >
              <option value="">Select category</option>
              <option value="Bug">Bug</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Support">Support</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 h-32 resize-none"
              placeholder="Describe your issue"
              required
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
            >
              Submit Ticket
            </button>
          </div>
        </form>

        {/* Show Submitted Tickets */}
        {tickets.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-rose-600 mb-4">
              Your Submitted Tickets
            </h2>
            <ul className="space-y-4">
              {tickets.map((ticket) => (
                <li
                  key={ticket.id}
                  className="border border-rose-100 p-4 rounded-xl shadow-sm bg-white flex justify-between items-start gap-4"
                >
                  <div>
                    <h3 className="font-bold text-lg">{ticket.subject}</h3>
                    <p className="text-sm text-gray-600">
                      Category: {ticket.category}
                    </p>
                    <p className="mt-1 text-gray-700">{ticket.description}</p>
                  </div>

                  <button
                    onClick={() => handleDelete(ticket.id)}
                    className="text-rose-500 hover:text-rose-700 transition"
                    title="Delete Ticket"
                  >
                    <Trash2 size={20} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CreateTicket;
