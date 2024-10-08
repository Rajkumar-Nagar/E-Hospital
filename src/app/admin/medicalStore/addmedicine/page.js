"use client";
import React, { useState } from 'react';

export default function AddMedicinePage() {
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    price: '',
    disease: '',
    expiryDate: '',
    listedDate: '',
    image: '',
  });

  const handleAddMedicine = (e) => {
    e.preventDefault();
    console.log(newMedicine); // Replace with actual API logic
    alert('New Medicine Added!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Add New Medicine</h1>
      
      <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <form onSubmit={handleAddMedicine} className="grid grid-cols-1 gap-6">
          {/* Medicine Name */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Medicine Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter medicine name"
              value={newMedicine.name}
              onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Price (₹)</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={newMedicine.price}
              onChange={(e) => setNewMedicine({ ...newMedicine, price: e.target.value })}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Disease */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Disease</label>
            <input
              type="text"
              name="disease"
              placeholder="Disease or condition treated"
              value={newMedicine.disease}
              onChange={(e) => setNewMedicine({ ...newMedicine, disease: e.target.value })}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Expiry Date */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Expiry Date</label>
            <input
              type="date"
              name="expiryDate"
              value={newMedicine.expiryDate}
              onChange={(e) => setNewMedicine({ ...newMedicine, expiryDate: e.target.value })}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Listed Date */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Listed Date</label>
            <input
              type="date"
              name="listedDate"
              value={newMedicine.listedDate}
              onChange={(e) => setNewMedicine({ ...newMedicine, listedDate: e.target.value })}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Image */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Medicine Image (URL)</label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              value={newMedicine.image}
              onChange={(e) => setNewMedicine({ ...newMedicine, image: e.target.value })}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition mt-4"
          >
            Add Medicine
          </button>
        </form>
      </div>
    </div>
  );
}
