"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const initialMedicinesData = [
    { id: 1, name: 'Paracetamol', price: 50, disease: 'Fever', expiryDate: '2025-01-01', listedDate: '2024-09-01', image: '/med1.jpeg' },
    { id: 2, name: 'Amoxicillin', price: 200, disease: 'Infection', expiryDate: '2024-11-01', listedDate: '2024-08-15', image: '/med1.jpeg' },
    { id: 3, name: 'Ibuprofen', price: 150, disease: 'Pain Relief', expiryDate: '2025-03-15', listedDate: '2024-09-20', image: '/med1.jpeg' },
    // Add more medicines with their image paths...
];

export default function MedicalStorePage() {
    const [medicines, setMedicines] = useState(initialMedicinesData);
    const [filters, setFilters] = useState({
        price: '',
        disease: '',
        expiryDate: '',
        listedDate: ''
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleDelete = (id) => {
        setMedicines(medicines.filter(med => med.id !== id));
    };

    const filteredMedicines = medicines.filter(med => {
        return (
            (!filters.price || med.price <= filters.price) &&
            (!filters.disease || med.disease.toLowerCase().includes(filters.disease.toLowerCase())) &&
            (!filters.expiryDate || med.expiryDate === filters.expiryDate) &&
            (!filters.listedDate || med.listedDate === filters.listedDate)
        );
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Medical Store</h1>

            {/* Filters Section */}
            <div className="mb-8">
                <div className="flex flex-wrap gap-4">
                    <input
                        type="number"
                        name="price"
                        placeholder="Max Price"
                        value={filters.price}
                        onChange={handleFilterChange}
                        className="p-3 border rounded-lg w-full md:w-1/4"
                    />
                    <input
                        type="text"
                        name="disease"
                        placeholder="Disease"
                        value={filters.disease}
                        onChange={handleFilterChange}
                        className="p-3 border rounded-lg w-full md:w-1/4"
                    />
                    <input
                        type="date"
                        name="expiryDate"
                        placeholder="Expiry Date"
                        value={filters.expiryDate}
                        onChange={handleFilterChange}
                        className="p-3 border rounded-lg w-full md:w-1/4"
                    />
                    <input
                        type="date"
                        name="listedDate"
                        placeholder="Listed Date"
                        value={filters.listedDate}
                        onChange={handleFilterChange}
                        className="p-3 border rounded-lg w-full md:w-1/4"
                    />
                </div>
            </div>

            {/* Medicine List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMedicines.map((medicine) => (
                    <div key={medicine.id} className="bg-white p-4 rounded-lg shadow-lg">
                        <img
                            src={medicine.image}
                            alt={medicine.name}
                            className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-bold mb-2">
                            <Link href={`/admin/medicalStore/${medicine.id}`} className="text-blue-500 hover:underline">{medicine.name}</Link>
                        </h3>
                        <p><strong>Price:</strong> ₹{medicine.price}</p>
                        <p><strong>Disease:</strong> {medicine.disease}</p>
                        <p><strong>Expiry Date:</strong> {medicine.expiryDate}</p>
                        <p><strong>Listed Date:</strong> {medicine.listedDate}</p>
                        <div className="mt-4">
                            <Link href={`/medicine/edit/${medicine.id}`} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</Link>
                            <button
                                onClick={() => handleDelete(medicine.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add New Medicine Button */}
            <div className="text-center mt-8">
                <Link href="/admin/medicalStore/addmedicine">
                    <p className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
                        Add New Medicine
                    </p>
                </Link>
            </div>
        </div>
    );
}
