'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p>123 Health Street, Wellness City</p>
          <p>Phone: +1 234 567 890</p>
          <p>Email: info@kalyaanhospital.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><a href="/doctors" className="hover:text-blue-400">Doctors</a></li>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#"><img src="/images/facebook.png" alt="Facebook" className="h-6" /></a>
            <a href="#"><img src="/images/instagram.png" alt="Instagram" className="h-6" /></a>
            <a href="#"><img src="/images/linkedin.png" alt="LinkedIn" className="h-6" /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-sm">
        &copy; 2023 Kalyaan Hospital. All rights reserved.
      </div>
    </footer>
  );
}
