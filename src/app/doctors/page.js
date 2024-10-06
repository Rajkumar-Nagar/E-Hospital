'use client';

import React, { useState } from 'react';
import DoctorCard from '../../components/doctor_card'; // Assuming the Card component is in the same directory

const doctorsData = [
    {
        name: 'Dr. A. Sharma',
        degree: 'MBBS, MD',
        age: 45,
        experience: 20,
        location: 'Delhi',
        available: true,
        image: '/doctor1.avif',
    },
    {
        name: 'Dr. B. Gupta',
        degree: 'MBBS, Neurologist',
        age: 50,
        experience: 25,
        location: 'Mumbai',
        available: false,
        image: '/doctor2.jpg',
    },
    // Add more doctors here
];

function DoctorListingPage() {
    const [filters, setFilters] = useState({
        search: '',
        degree: '',
        age: '',
        experience: '',
        location: '',
        available: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const filteredDoctors = doctorsData.filter((doctor) => {
        return (
            (!filters.search || doctor.name.toLowerCase().includes(filters.search.toLowerCase())) &&
            (!filters.degree || doctor.degree.toLowerCase().includes(filters.degree.toLowerCase())) &&
            (!filters.age || doctor.age === Number(filters.age)) &&
            (!filters.experience || doctor.experience >= Number(filters.experience)) &&
            (!filters.location || doctor.location.toLowerCase().includes(filters.location.toLowerCase())) &&
            (!filters.available || doctor.available === (filters.available === 'true'))
        );
    });

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-4">Doctor Listing</h1>

            {/* Filter Section */}
            <div className="grid grid-cols-1 gap-4 mb-6">
                <input
                    type="text"
                    name="search"
                    placeholder="Search by Name or Degree"
                    value={filters.search}
                    onChange={handleFilterChange}
                    className="p-2 border rounded w-full"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <select
                        name="degree"
                        value={filters.degree}
                        onChange={handleFilterChange}
                        className="p-2 border rounded"
                    >
                        <option value="">Filter by Degree</option>
                        <option value="MBBS">MBBS</option>
                        <option value="MD">MD</option>
                        <option value="Neurologist">Neurologist</option>
                        {/* Add more degree options as needed */}
                    </select>

                    <select
                        name="age"
                        value={filters.age}
                        onChange={handleFilterChange}
                        className="p-2 border rounded"
                    >
                        <option value="">Filter by Age</option>
                        <option value="40">40+</option>
                        <option value="50">50+</option>
                        <option value="60">60+</option>
                        {/* Add more age ranges as needed */}
                    </select>

                    <select
                        name="experience"
                        value={filters.experience}
                        onChange={handleFilterChange}
                        className="p-2 border rounded"
                    >
                        <option value="">Filter by Experience</option>
                        <option value="5">5+ years</option>
                        <option value="10">10+ years</option>
                        <option value="20">20+ years</option>
                    </select>

                    <select
                        name="location"
                        value={filters.location}
                        onChange={handleFilterChange}
                        className="p-2 border rounded"
                    >
                        <option value="">Filter by Location</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        {/* Add more locations as needed */}
                    </select>

                    <select
                        name="available"
                        value={filters.available}
                        onChange={handleFilterChange}
                        className="p-2 border rounded"
                    >
                        <option value="">Filter by Availability</option>
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                </div>
            </div>

            {/* Doctor Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor, index) => (
                        <DoctorCard key={index} doctor={doctor} />
                    ))
                ) : (
                    <p>No doctors found</p>
                )}
            </div>
        </div>
    );
}

export default DoctorListingPage;
