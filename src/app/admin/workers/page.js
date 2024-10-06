"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const workersData = [
    { id: 1, name: 'Dr. A. Sharma', department: 'Surgery', workingToday: true, attendanceAvg: '90%', reviews: 'Excellent', patientsHandled: 50 },
    { id: 2, name: 'Nurse B. Gupta', department: 'Cardiology', workingToday: true, attendanceAvg: '85%', reviews: 'Good', patientsHandled: 30 },
    { id: 3, name: 'Technician C. Mehta', department: 'Admin', workingToday: false, attendanceAvg: '95%', reviews: 'Very Good', patientsHandled: 20 },
    // Add more worker data...
];

export default function WorkersPage() {
    const [filters, setFilters] = useState({
        search: '',
        department: '',
        workingToday: ''
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const filteredWorkers = workersData.filter((worker) => {
        return (
            (!filters.search || worker.name.toLowerCase().includes(filters.search.toLowerCase())) &&
            (!filters.department || worker.department === filters.department) &&
            (!filters.workingToday || (filters.workingToday === 'yes' ? worker.workingToday : !worker.workingToday))
        );
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Hospital Workers</h1>

            {/* Filters Section */}
            <div className="mb-8">
                <div className="flex flex-wrap gap-4">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search by name"
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
                        name="workingToday"
                        value={filters.workingToday}
                        onChange={handleFilterChange}
                        className="p-3 border rounded-lg w-full md:w-1/4"
                    >
                        <option value="">All Workers</option>
                        <option value="yes">Working Today</option>
                        <option value="no">Not Working Today</option>
                    </select>
                </div>
            </div>

            {/* Workers List */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-3 border">ID</th>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Department</th>
                            <th className="p-3 border">Working Today</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredWorkers.length > 0 ? (
                            filteredWorkers.map((worker) => (
                                <tr key={worker.id} className="border-t">
                                    <td className="p-3 border">{worker.id}</td>
                                    <td className="p-3 border">
                                      
                                            <Link href={`/workers/${worker.id}`} className="text-blue-500 hover:underline">{worker.name}</Link>
                                        
                                    </td>
                                    <td className="p-3 border">{worker.department}</td>
                                    <td className="p-3 border">
                                        {worker.workingToday ? (
                                            <span className="text-green-500">Yes</span>
                                        ) : (
                                            <span className="text-red-500">No</span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center p-3 text-gray-600">
                                    No workers found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
