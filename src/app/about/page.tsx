import React from 'react';
import Link from 'next/link'; // Assuming you are using Next.js for routing

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Welcome Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-10 px-6 rounded-lg text-center shadow-lg">
          <h1 className="text-5xl font-bold mb-6">Welcome to Kalyaan Hospital</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At <strong>Kalyaan Hospital</strong>, we provide exceptional medical care with a patient-first approach. Our expert doctors, modern facilities, and compassionate care ensure that you receive the best treatment and support throughout your healthcare journey.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">About Kalyaan</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            <strong>Kalyaan Hospital</strong> is more than just a healthcare facility. We believe in holistic health, offering advanced medical technologies combined with compassionate care. Our team of professionals ensures your recovery with personalized attention to your health.
          </p>
        </div>
      </section>

      {/* How to Book Your Appointment Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">How to Book Your Appointment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Step 1: Go to the Counter Window</h3>
            <p>Visit the <Link href="/counter" className="text-blue-500 hover:underline">Counter</Link> or click the button below to access the digital booking window.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Step 2: Provide Your Details</h3>
            <p>Fill in your illness, preferred appointment time, and the doctor you wish to consult.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Step 3: Receive Your Digital Receipt</h3>
            <p>Your receipt will contain the doctor's details, appointment time, number, and waiting number.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Step 4: Get Notified</h3>
            <p>You will be notified when your appointment is approaching, one number before your turn.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Step 5: Meet the Doctor</h3>
            <p>Your consultation will begin when your number is called.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Step 6: Receive Your Digital Prescription</h3>
            <p>The doctor will provide a digital copy of your diagnosis and prescribed medication.</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link href="/counter" className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600 transition">Go to Counter</Link>
        </div>
      </section>

      {/* Review Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Why Patients Choose Kalyaan</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            At <strong>Kalyaan Hospital</strong>, we combine cutting-edge treatments with compassionate care, ensuring every patient receives the respect and precision they deserve.
          </p>
        </div>
      </section>

      {/* Why Kalyaan Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Why Kalyaan is Essential for Your Health</h2>
        <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700 list-disc list-inside">
          <li className="p-4 bg-gray-50 rounded-lg shadow-md">Comprehensive Medical Care: From diagnosis to treatment and follow-up, we provide full-spectrum healthcare services.</li>
          <li className="p-4 bg-gray-50 rounded-lg shadow-md">Convenient Digital Services: Book appointments, receive prescriptions, and order medicines through our digital platforms.</li>
          <li className="p-4 bg-gray-50 rounded-lg shadow-md">Highly Qualified Doctors: Our experienced doctors are specialists in a variety of medical fields.</li>
          <li className="p-4 bg-gray-50 rounded-lg shadow-md">Modern Facilities: We use state-of-the-art medical technology for the best patient care.</li>
          <li className="p-4 bg-gray-50 rounded-lg shadow-md">Efficient and Streamlined: Our digital appointment system ensures quick access to care.</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
