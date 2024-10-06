'use client';
import React from 'react';
import { useRouter } from 'next/router';

// Example workers data
const workersData = [
    { id: 1, name: 'Dr. A. Sharma', department: 'Surgery', workingToday: true, attendanceAvg: '90%', reviews: 'Excellent', patientsHandled: 50, leavesTaken: 5 },
    { id: 2, name: 'Nurse B. Gupta', department: 'Cardiology', workingToday: true, attendanceAvg: '85%', reviews: 'Good', patientsHandled: 30, leavesTaken: 10 },
    { id: 3, name: 'Technician C. Mehta', department: 'Admin', workingToday: false, attendanceAvg: '95%', reviews: 'Very Good', patientsHandled: 20, leavesTaken: 3 },
    // Add more worker data...
];

export default function WorkerDetails() {
    const router = useRouter();
    const { workersId } = router.query;
    console.log(workersId)
    const worker = workersData.find((w) => w.id === workersId);

    if (!worker) {
        return <p>Worker not found</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">{worker.name}</h1>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Worker Details</h2>
                <p><strong>Department:</strong> {worker.department}</p>
                <p><strong>Working Today:</strong> {worker.workingToday ? 'Yes' : 'No'}</p>
                <p><strong>Attendance Average:</strong> {worker.attendanceAvg}</p>
                <p><strong>Leaves Taken:</strong> {worker.leavesTaken}</p>
                <p><strong>Patients Handled:</strong> {worker.patientsHandled}</p>
                <p><strong>Reviews:</strong> {worker.reviews}</p>

                <h3 className="text-xl font-semibold mt-6">Patients Under Care</h3>
                {/* Display patient's details handled by this worker */}
                {/* Add real patient data dynamically */}
                <ul className="list-disc list-inside">
                    <li>Patient 1</li>
                    <li>Patient 2</li>
                    <li>Patient 3</li>
                </ul>
            </div>
        </div>
    );
}
