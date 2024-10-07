'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: 'Patient X',
    review: 'The care at Kalyaan Hospital was exceptional.',
  },
  {
    name: 'Patient Y',
    review: 'Staff were friendly and professional.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-3xl font-bold text-gray-700 mb-10">What Our Patients Say</h2>
      <div className="container mx-auto text-center">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <p className="text-xl font-light text-gray-600 italic">"{testimonials[current].review}"</p>
          <h4 className="text-gray-800 mt-4">- {testimonials[current].name}</h4>
        </div>
        <div className="mt-6 space-x-4">
          <button onClick={prevTestimonial} className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Previous</button>
          <button onClick={nextTestimonial} className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Next</button>
        </div>
      </div>
    </section>
  );
}
