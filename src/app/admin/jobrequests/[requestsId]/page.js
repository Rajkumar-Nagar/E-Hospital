'use client';
import React, { useState } from 'react';

// Example application data
const applicationsData = [
    {
        id: 1,
        name: 'Dr. A. Sharma',
        position: 'Doctor',
        experience: '10 years',
        qualifications: {
            tenth: '90%',
            twelfth: '92%',
            graduation: 'MBBS, MD',
            degreePdf: '/pdfs/doctor-degree.pdf',
            marksheetPdf: '/pdfs/doctor-marksheet.pdf',
        },
        photo: '/doctor1.avif',
        status: 'Pending',
    },
    {
        id: 2,
        name: 'Nurse B. Gupta',
        position: 'Nurse',
        experience: '5 years',
        qualifications: {
            tenth: '88%',
            twelfth: '85%',
            graduation: 'B.Sc Nursing',
            degreePdf: '/pdfs/nurse-degree.pdf',
            marksheetPdf: '/pdfs/nurse-marksheet.pdf',
        },
        photo: '/doctor2.jpg',
        status: 'Pending',
    },
    {
        id: 3,
        name: 'Technician C. Mehta',
        position: 'Technician',
        experience: '8 years',
        qualifications: {
            tenth: '85%',
            twelfth: '82%',
            graduation: 'Diploma in Medical Technology',
            degreePdf: '/pdfs/tech-degree.pdf',
            marksheetPdf: '/pdfs/tech-marksheet.pdf',
        },
        photo: '/doctor2.jpg',
        status: 'Pending',
    },
];

export default function ApplicationDetails({ params }) {
    const application = applicationsData.find((app) => app.id === Number(params.requestsId));

    const [appStatus, setAppStatus] = useState(application?.status || 'Pending');

    if (!application) {
        return <p>Application not found</p>;
    }

    const handleAccept = () => {
        setAppStatus('Accepted');
    };

    const handleReject = () => {
        setAppStatus('Rejected');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">{application.name} - {application.position}</h1>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                {/* Photo */}
                <div className="flex justify-center mb-6">
                    <img
                        src={application.photo}
                        alt={application.name}
                        className="w-32 h-32 rounded-full shadow-md"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Basic Info */}
                    <div>
                        <p><strong>Position:</strong> {application.position}</p>
                        <p><strong>Experience:</strong> {application.experience}</p>
                        <p><strong>Status:</strong> {appStatus}</p>
                    </div>

                    {/* Qualifications */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
                        <p><strong>10th Grade:</strong> {application.qualifications.tenth}</p>
                        <p><strong>12th Grade:</strong> {application.qualifications.twelfth}</p>
                        <p><strong>Graduation:</strong> {application.qualifications.graduation}</p>

                        <div className="mt-4">
                            <h4 className="text-lg font-semibold">Documents</h4>
                            <p>
                                <a
                                    href={application.qualifications.degreePdf}
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Degree PDF
                                </a>
                            </p>
                            <p>
                                <a
                                    href={application.qualifications.marksheetPdf}
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Marksheet PDF
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Accept/Reject Buttons */}
                <div className="mt-6">
                    {appStatus === 'Pending' && (
                        <>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded mr-4"
                                onClick={handleAccept}
                            >
                                Accept
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded"
                                onClick={handleReject}
                            >
                                Reject
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
