"use client";
import React, { useState } from 'react';

// Example data for patient appointments
const initialPatientsData = [
  { id: 1, name: 'John Doe', doctor: 'Dr. A. Sharma', date: '2024-09-25', time: '10:00 AM', status: 'Confirmed' },
  { id: 2, name: 'Jane Smith', doctor: 'Dr. B. Gupta', date: '2024-09-26', time: '11:30 AM', status: 'Pending' },
  { id: 3, name: 'Alice Brown', doctor: 'Dr. A. Sharma', date: '2024-09-26', time: '12:00 PM', status: 'Cancelled' },
  // Add more appointments...
];

export default function PatientAppointmentsPage() {
  const [patients, setPatients] = useState(initialPatientsData);
  const [filters, setFilters] = useState({
    doctor: '',
    date: '',
    status: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredPatients = patients.filter((patient) => {
    return (
      (!filters.doctor || patient.doctor === filters.doctor) &&
      (!filters.date || patient.date === filters.date) &&
      (!filters.status || patient.status === filters.status)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Patient Appointments</h1>

      {/* Filters Section */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <select
          name="doctor"
          value={filters.doctor}
          onChange={handleFilterChange}
          className="p-3 border rounded-lg w-full"
        >
          <option value="">All Doctors</option>
          <option value="Dr. A. Sharma">Dr. A. Sharma</option>
          <option value="Dr. B. Gupta">Dr. B. Gupta</option>
        </select>

        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
          className="p-3 border rounded-lg w-full"
        />

        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="p-3 border rounded-lg w-full"
        >
          <option value="">All Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Patient List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatients.map((patient) => (
          <div key={patient.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">{patient.name}</h3>
            <p><strong>Doctor:</strong> {patient.doctor}</p>
            <p><strong>Date:</strong> {patient.date}</p>
            <p><strong>Time:</strong> {patient.time}</p>
            <p><strong>Status:</strong> <span className={getStatusStyle(patient.status)}>{patient.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to style status
function getStatusStyle(status) {
  switch (status) {
    case 'Confirmed':
      return 'text-green-500';
    case 'Pending':
      return 'text-yellow-500';
    case 'Cancelled':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
}
