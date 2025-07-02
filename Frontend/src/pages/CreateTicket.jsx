
import React, { useState } from 'react';
import DashboardLayout from '../Layout/DashboardLayout';

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Ticket Submitted!");
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
      </div>
    </DashboardLayout>
  );
};

export default CreateTicket;
