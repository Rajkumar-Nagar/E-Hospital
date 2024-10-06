"use client";
import React, { useState } from 'react';

const worksData = [
  { id: 1, work: 'Surgery', department: 'Surgery', date: '2024-10-05', status: 'Completed' },
  { id: 2, work: 'Patient Checkup', department: 'Cardiology', date: '2024-10-03', status: 'Pending' },
  { id: 3, work: 'Equipment Maintenance', department: 'Admin', date: '2024-09-28', status: 'In Progress' },
  // Add more data here...
];

export default function WorksPage() {
  const [filters, setFilters] = useState({
    search: '',
    department: '',
    status: '',
    date: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredWorks = worksData.filter((work) => {
    return (
      (!filters.search || work.work.toLowerCase().includes(filters.search.toLowerCase())) &&
      (!filters.department || work.department === filters.department) &&
      (!filters.status || work.status === filters.status) &&
      (!filters.date || work.date === filters.date)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Hospital Works</h1>

      {/* Filters Section */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            name="search"
            placeholder="Search by work"
            value={filters.search}
            onChange={handleFilterChange}
            className="p-3 border rounded-lg w-full md:w-1/4"
          />
          <select
            name="department"
            value={filters.department}
            onChange={handleFilterChange}
            className="p-3 border rounded-lg w-full md:w-1/4"
          >
            <option value="">All Departments</option>
            <option value="Surgery">Surgery</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Admin">Admin</option>
          </select>
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="p-3 border rounded-lg w-full md:w-1/4"
          >
            <option value="">All Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
          </select>
          <input
            type="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
            className="p-3 border rounded-lg w-full md:w-1/4"
          />
        </div>
      </div>

      {/* Works List */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Work</th>
              <th className="p-3 border">Department</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredWorks.length > 0 ? (
              filteredWorks.map((work) => (
                <tr key={work.id} className="border-t">
                  <td className="p-3 border">{work.id}</td>
                  <td className="p-3 border">{work.work}</td>
                  <td className="p-3 border">{work.department}</td>
                  <td className="p-3 border">{work.date}</td>
                  <td className="p-3 border">{work.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-3 text-gray-600">
                  No works found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
