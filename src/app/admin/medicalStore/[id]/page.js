"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

// Example data to simulate dynamic routing (you can replace this with API data)
const medicinesData = [
    {
        id: 1,
        name: 'Paracetamol',
        price: 50,
        disease: 'Fever',
        expiryDate: '2025-01-01',
        listedDate: '2024-09-01',
        description: 'Paracetamol is used to treat fever and pain. It is commonly used for headaches, body aches, and mild pain relief.',
        image: '/med1.jpeg'
    },
    {
        id: 2,
        name: 'Amoxicillin',
        price: 200,
        disease: 'Infection',
        expiryDate: '2024-11-01',
        listedDate: '2024-08-15',
        description: 'Amoxicillin is an antibiotic used to treat bacterial infections like ear infections, pneumonia, and skin infections.',
        image: '/med1.jpeg'
    },
    {
        id: 3,
        name: 'Ibuprofen',
        price: 150,
        disease: 'Pain Relief',
        expiryDate: '2025-03-15',
        listedDate: '2024-09-20',
        description: 'Ibuprofen is used to relieve pain from various conditions such as headache, dental pain, and muscle aches. It also reduces fever.',
        image: '/med1.jpeg'
    },
    // Add more medicines as needed
];

export default function MedicineDetailsPage({ params }) {

  const router=useRouter()
    // Find the selected medicine by its ID
    const medicine = medicinesData.find((med) => med.id === Number(params.id));

    if (!medicine) {
        return <p>Medicine not found.</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                {/* Medicine Image */}
                <div className="flex justify-center mb-6">
                    <img
                        src={medicine.image}
                        alt={medicine.name}
                        className="w-full h-64 object-cover rounded-lg"
                    />
                </div>

                {/* Medicine Name */}
                <h1 className="text-4xl font-bold text-blue-600 mb-4">{medicine.name}</h1>

                {/* Medicine Details */}
                <div className="mb-6">
                    <p><strong>Price:</strong> ₹{medicine.price}</p>
                    <p><strong>Disease:</strong> {medicine.disease}</p>
                    <p><strong>Expiry Date:</strong> {medicine.expiryDate}</p>
                    <p><strong>Listed Date:</strong> {medicine.listedDate}</p>
                </div>

                {/* Medicine Description */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-700">{medicine.description}</p>
                </div>

                {/* Back Button */}
                <div className="text-center">
                    <button
                        onClick={() => router.back()}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Back to List
                    </button>
                </div>
            </div>
        </div>
    );
}
