import Link from 'next/link';
import React from 'react';

function DoctorCard({ doctor }) {
    return (
        <div className="border border-gray-200 p-6 rounded-lg shadow-lg bg-white transition hover:shadow-xl hover:scale-105 transform duration-300 ease-in-out">
            <img src={doctor.image} alt={doctor.name} className="h-48 w-full object-contain rounded-md mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{doctor.name}</h2>
            <p className="text-gray-600 text-lg mb-2">{doctor.degree}</p>
            <p className="text-gray-700">Age: {doctor.age}</p>
            <p className="text-gray-700">Experience: {doctor.experience} years</p>
            <p className="text-gray-700 mb-4">Location: {doctor.location}</p>

            {/* More Details Button */}
            <Link
                href={`/doctors/${doctor.id}`} // Assuming you have a route for doctor details
                className="block w-full text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
                More Details
            </Link>
        </div>
    );
}

export default DoctorCard;
