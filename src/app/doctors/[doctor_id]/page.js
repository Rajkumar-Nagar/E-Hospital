
"use client"
import React, { useEffect, useState } from 'react';

// Assuming doctorsData is coming from an API or a local source
const doctorsData = [
    {
        id: '1',
        name: 'Dr. A. Sharma',
        degree: 'MBBS, MD',
        age: 45,
        experience: 20,
        location: 'Delhi',
        image: '/doctor1.avif',
        timing: '9 AM - 4 PM',
        available: true,
        bio: 'Dr. A. Sharma is a highly experienced cardiologist with 20 years of medical expertise in treating heart diseases.',
        reviews: [
            { patientName: 'John Doe', review: 'Very professional and caring.' },
            { patientName: 'Jane Smith', review: 'Dr. Sharma provided excellent care during my visit.' },
        ],
    },
    {
        id: '2',
        name: 'Dr. B. Gupta',
        degree: 'MBBS, Neurologist',
        age: 50,
        experience: 25,
        location: 'Mumbai',
        image: '/doctor2.jpg',
        timing: '10 AM - 6 PM',
        available: false,
        bio: 'Dr. B. Gupta is an expert in neurology with over 25 years of experience in treating complex neurological disorders.',
        reviews: [
            { patientName: 'Emily Davis', review: 'Very knowledgeable and empathetic doctor.' },
            { patientName: 'Michael Brown', review: 'Dr. Gupta was very thorough in his diagnosis.' },
        ],
    },
    // Add more doctors here...
];

function DoctorDetails({ params }) {


    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        // Find the doctor by ID
        const foundDoctor = doctorsData.find((doc) => doc.id === params.doctor_id);
        if (foundDoctor) {
            setDoctor(foundDoctor);
        }
    }, [params.doctor_id]);

    if (!doctor) return <p>Loading...</p>;

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Doctor Image */}
                <div className="md:w-1/3">
                    <img src={doctor.image} alt={doctor.name} className="rounded-lg shadow-lg w-full h-auto" />
                </div>

                {/* Doctor Details */}
                <div className="md:w-2/3">
                    <h1 className="text-4xl font-bold mb-4">{doctor.name}</h1>
                    <p className="text-lg text-gray-600 mb-2">{doctor.degree}</p>
                    <p className="text-lg text-gray-600 mb-2">Age: {doctor.age}</p>
                    <p className="text-lg text-gray-600 mb-2">Experience: {doctor.experience} years</p>
                    <p className="text-lg text-gray-600 mb-2">Location: {doctor.location}</p>
                    <p className="text-lg text-gray-600 mb-2">Timing: {doctor.timing}</p>

                    {/* Availability */}
                    <p className={`text-lg mb-4 ${doctor.available ? 'text-green-600' : 'text-red-600'}`}>
                        {doctor.available ? 'Available for appointments' : 'Currently unavailable'}
                    </p>

                    {/* Emergency Appointment Button */}
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                        disabled={!doctor.available}
                    >
                        Book Emergency Appointment
                    </button>

                    {/* Bio */}
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold mb-2">Bio</h2>
                        <p className="text-gray-700">{doctor.bio}</p>
                    </div>

                    {/* Patient Reviews */}
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold mb-2">Patient Reviews</h2>
                        {doctor.reviews.length > 0 ? (
                            <ul className="space-y-4">
                                {doctor.reviews.map((review, index) => (
                                    <li key={index} className="border p-4 rounded-lg shadow-md">
                                        <p className="text-gray-800"><strong>{review.patientName}:</strong> {review.review}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No reviews available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorDetails;
