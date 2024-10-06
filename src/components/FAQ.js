'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of medical services including cardiology, neurology, and orthopedics.',
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment online through our website or call our reception desk.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-gray-700 mb-10">Frequently Asked Questions</h2>
      <div className="container mx-auto max-w-4xl">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-gray-200 mb-4">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl text-gray-800">{item.question}</h3>
              <span className="text-gray-500">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="pb-4">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
