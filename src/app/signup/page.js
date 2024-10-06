'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        gender: '',
        mobile: '',
        address: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.password) tempErrors.password = "Password is required";
        if (!formData.confirmPassword) tempErrors.confirmPassword = "Confirm password is required";
        if (formData.password !== formData.confirmPassword) tempErrors.passwordMatch = "Passwords don't match";
        if (!formData.age) tempErrors.age = "Age is required";
        if (!formData.gender) tempErrors.gender = "Gender is required";
        if (!formData.mobile) tempErrors.mobile = "Mobile number is required";
        if (formData.mobile.length !== 10) tempErrors.mobile = "Mobile number must be 10 digits";
        if (!formData.address) tempErrors.address = "Address is required";
        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(formData);
            alert('Signup Successful!');
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">Signup</h1>
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
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email (optional) */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Email (Optional)</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                        {errors.passwordMatch && <p className="text-red-500 text-sm mt-1">{errors.passwordMatch}</p>}
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
                        />
                        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                    </div>

                    {/* Gender */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                    </div>

                    {/* Mobile Number */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Mobile Number</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="Enter your mobile number"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                    </div>

                    {/* Address */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Enter your address"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        ></textarea>
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                        >
                            Signup
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Already registered?{' '}
                        <Link href="/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
