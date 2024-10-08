'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [search, setSearch] = useState('');

    return (
        <nav className="bg-white shadow-md px-4 sm:px-6 md:px-8">
            <div className="mx-auto flex justify-between items-center py-4">
                <Link href="/">
                    <div className="flex items-center space-x-3">
                        {/* <img src="/images/logo.png" alt="Kalyaan Hospital" className="h-10" /> */}
                        <span className="text-2xl font-bold text-gray-700">Kalyaan Hospital</span>
                    </div>
                </Link>
                <ul className="flex space-x-8">
                    <li><Link href="/doctors" className="text-gray-700 hover:text-blue-500">Doctors</Link></li>
                    <li><Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link></li>
                    <li><Link href="/services" className="text-gray-700 hover:text-blue-500">Services</Link></li>
                    <li><Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link></li>
                    <li><Link href="/counter" className="text-gray-700 hover:text-blue-500">Counter</Link></li>
                </ul>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-full py-1 px-4 text-gray-700"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    {/* Login/Signup Button */}
                    <Link href="/login">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                            Login/Signup
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
