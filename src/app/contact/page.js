import React from 'react';

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We are here to help you! Feel free to reach out to us for any inquiries, appointments, or feedback.
        </p>
      </section>

      {/* Contact Form and Info Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg text-gray-600 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg text-gray-600 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-4">
            We are always available to assist you. Feel free to contact us for any inquiries or to schedule your appointments.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800">Address</h3>
            <p className="text-gray-600">123 Health Street, Wellness City</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800">Phone</h3>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800">Email</h3>
            <p className="text-gray-600">info@kalyaanhospital.com</p>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Find Us on the Map</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.042224822785!2d144.9612809!3d-37.8106565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b1c2f2d8c7%3A0x6e7d74e21a5d1ffb!2s123%20Health%20St%2C%20Wellness%20City!5e0!3m2!1sen!2sin!4v1634040941084!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md border"
              title="Hospital Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
