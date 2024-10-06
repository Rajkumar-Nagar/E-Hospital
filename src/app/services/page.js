import React from 'react';

function ServicesPage() {
  const services = [
    {
      title: 'Cardiology',
      description:
        'Our cardiology department provides comprehensive care for heart-related conditions, offering advanced diagnostics and treatments to ensure heart health.',
      icon: '💓',
    },
    {
      title: 'Neurology',
      description:
        'The neurology department focuses on the diagnosis and treatment of diseases affecting the brain, spine, and nerves, ensuring expert care.',
      icon: '🧠',
    },
    {
      title: 'Pediatrics',
      description:
        'Our pediatric department is dedicated to the care of children, from infants to adolescents, providing specialized treatments and child-friendly environments.',
      icon: '👶',
    },
    {
      title: 'Orthopedics',
      description:
        'We provide advanced care for musculoskeletal conditions, offering expert treatment for injuries, fractures, joint replacements, and rehabilitation.',
      icon: '🦴',
    },
    {
      title: 'Radiology',
      description:
        'Our radiology department is equipped with state-of-the-art imaging technology, offering a wide range of diagnostic and therapeutic services.',
      icon: '🩻',
    },
    {
      title: 'Dermatology',
      description:
        'We provide specialized care for skin, hair, and nail conditions, offering advanced treatments in medical, cosmetic, and surgical dermatology.',
      icon: '🧴',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">Our Services</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          At Kalyaan Hospital, we offer a wide range of specialized medical services to meet the needs of our patients. Explore our departments and find the right care for you.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-5xl text-blue-500 mb-4">{service.icon}</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ServicesPage;
