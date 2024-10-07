'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authActions } from '@/actions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const signupSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.union([
        z.string().email({ message: "Invalid email address" }),
        z.string().min(0).max(0), // Allow an empty string
    ]),
    password: z.string().min(1, { message: "Password is required" }),
    confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
    age: z
        .string()
        .refine((val) => !isNaN(Number(val)) && Number(val) > 0, { message: "Age must be a valid number" }),
    gender: z.string().min(1, { message: "Gender is required" }),
    phoneNumber: z
        .string()
        .min(10, { message: "Mobile number must be 10 digits" })
        .max(10, { message: "Mobile number must be 10 digits" }),
    address: z.string().min(1, { message: "Address is required" }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords don't match",
});

export default function SignupPage() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: 'asdf',
            email: '',
            password: '123',
            confirmPassword: '123',
            age: '12',
            phoneNumber: '1234567890',
            address: '123',
            gender: 'Male',
        }
    });

    const router = useRouter();
    const [error, setError] = useState('')

    const onSubmit = async (data: z.infer<typeof signupSchema>) => {
        const { error, user } = await authActions.createUser(data);
        if (error) setError(error);
        else {
            router.push('/');
        };

    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">Signup</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            {...register('name')}
                            placeholder="Enter your name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email (optional) */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Email (Optional)</label>
                        <input
                            type="email"
                            {...register('email')}
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            autoComplete='email'
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            {...register('password')}
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            autoComplete='new-password'
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            {...register('confirmPassword')}
                            placeholder="Confirm your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            autoComplete='new-password'
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                    </div>

                    {/* Age */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Age</label>
                        <input
                            type="number"
                            {...register('age')}
                            placeholder="Enter your age"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
                    </div>

                    {/* Gender */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Gender</label>
                        <select
                            {...register('gender')}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
                    </div>

                    {/* phoneNumber Number */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Mobile Number</label>
                        <input
                            type="tel"
                            {...register('phoneNumber')}
                            placeholder="Enter your mobile number"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                    </div>

                    {/* Address */}
                    <div className="mb-5">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Address</label>
                        <textarea
                            {...register('address')}
                            placeholder="Enter your address"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        ></textarea>
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                    </div>


                    {/* Error Message */}
                    {error && <div className="mb-5"> <p className="text-red-500 text-sm mt-1">{error}</p> </div>}

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
