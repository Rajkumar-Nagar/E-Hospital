"use client";
import Image from 'next/image';
import React, { useState } from 'react';

function CounterPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    aadhar: '',
    fatherName: '',
    mobile: '',
    disease: '',
    doctor: '',
    age: '',
    appointmentDate: '',
    timeSlot: '',
    gender: '',
    appointmentType: 'In-person',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Appointment Submitted Successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        {/* Image on Top */}
        <div className="w-full mb-6">
          <Image
            width={800}
            height={400}
            src="/counter.jpg" // Replace with your image path
            alt="Hospital Reception"
            className="rounded-t-xl object-cover w-full h-96"
          />
        </div>

        {/* Form */}
        <div className="w-full bg-gray-50 p-8 rounded-b-xl">
          <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">Book Your Appointment</h1>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-5">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Address */}
            <div className="mb-5">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Aadhar No */}
            <div className="mb-5">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Aadhar No</label>
              <input
                type="text"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleInputChange}
                placeholder="Enter your Aadhar number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Father's Name */}
            <div className="mb-5">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Father's Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                placeholder="Enter your father's name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Mobile No */}
            <div className="mb-5">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Mobile No</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Disease */}
            <div className="mb-5">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Disease</label>
              <input
                type="text"
                name="disease"
                value={formData.disease}
                onChange={handleInputChange}
                placeholder="Enter your disease or symptoms"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Doctor Name */}
            <div className="mb-5">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Doctor Name</label>
              <input
                type="text"
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                placeholder="Enter doctor's name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Age */}
            <div className="mb-5">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Enter your age"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Appointment Date */}
            <div className="mb-5">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Appointment Date</label>
              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Time Slot */}
            <div className="mb-5">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Preferred Time Slot</label>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select Time Slot</option>
                <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                <option value="Afternoon (12PM - 3PM)">Afternoon (12PM - 3PM)</option>
                <option value="Evening (3PM - 6PM)">Evening (3PM - 6PM)</option>
              </select>
            </div>

            {/* Gender */}
            <div className="mb-5">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Appointment Type */}
            <div className="mb-5">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Appointment Type</label>
              <select
                name="appointmentType"
                value={formData.appointmentType}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              >
                <option value="In-person">In-person</option>
                <option value="Online">Online</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CounterPage;
