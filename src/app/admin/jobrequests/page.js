"use client";
import Link from 'next/link';
import React, { useState } from 'react';

// Example application data
const applicationsData = [
    { id: 1, name: 'Dr. A. Sharma', position: 'Doctor', status: 'Pending' },
    { id: 2, name: 'Nurse B. Gupta', position: 'Nurse', status: 'Pending' },
    { id: 3, name: 'Technician C. Mehta', position: 'Technician', status: 'Pending' },
    // Add more application data here...
];

export default function RequestsPage() {
    const [applications, setApplications] = useState(applicationsData);

    const handleAccept = (id) => {
        setApplications(applications.map(app => app.id === id ? { ...app, status: 'Accepted' } : app));
    };

    const handleReject = (id) => {
        setApplications(applications.map(app => app.id === id ? { ...app, status: 'Rejected' } : app));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Job Applications</h1>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-3 border">ID</th>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Position</th>
                            <th className="p-3 border">Status</th>
                            <th className="p-3 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app) => (
                            <tr key={app.id} className="border-t">
                                <td className="p-3 border">{app.id}</td>
                                <td className="p-3 border">{app.name}</td>
                                <td className="p-3 border">{app.position}</td>
                                <td className="p-3 border">{app.status}</td>
                                <td className="p-3 border">
                                    {app.status === 'Pending' && (
                                        <>
                                            <button
                                                className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                                                onClick={() => handleAccept(app.id)}
                                            >
                                                Accept
                                            </button>
                                            <button
                                                className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                                                onClick={() => handleReject(app.id)}
                                            >
                                                Reject
                                            </button>
                                        </>
                                    )}

                                    <Link href={`/admin/jobrequests/${app.id}`} className="text-blue-500 hover:underline">Review</Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
