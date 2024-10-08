'use client';

import Link from 'next/link';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authActions } from '@/actions';
import { signIn } from '@/lib/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, { message: "Mobile number is required" })
    .length(10, { message: "Mobile number must be 10 digits" }),
  password: z
    .string()
    .min(1, { message: "Password is required" }),
});

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });

  const router = useRouter();
  const [error, setError] = useState('');

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    const result = await authActions.loginUser(values);
    if (result.error) setError(result.error);
    else {
      router.push('/');
    };
  };

  return (
    <div className="container mx-auto px-4 py-12 h-screen flex items-center">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl w-full">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Mobile Number */}
          <div className="mb-5">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Mobile Number</label>
            <input
              type="tel"
              {...register('phoneNumber')}
              placeholder="Enter your mobile number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              autoComplete='tel'
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber?.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              {...register('password')}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              autoComplete='current-password'
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>}
          </div>

          {/* Error Message */}
          <div className="mb-5">
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>


          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            New user?{' '}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Signup here
            </Link>
          </p>
          <p className="mt-3">
            <Link href="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
