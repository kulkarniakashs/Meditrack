import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between flex-row">
          
          {/* About Section */}
          <div className="w-2/3 sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="font-bold text-lg mb-2">About Us</h5>
            <p className="text-sm">
            A comprehensive solution for hospitals and vendors to manage medicine inventories, streamline orders, and ensure efficient supply chain management.
            </p>
          </div>

          {/* Services Section */}
          <div className="w-1/3 sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="font-bold text-lg mb-2">Quick Access</h5>
            <ul>
              <li className="mb-2">
                <Link href="/services/web-development" className="text-sm hover:underline">Dashboard</Link>
              </li>
              <li className="mb-2">
                <Link href="/services/app-development" className="text-sm hover:underline">Hospital</Link>
              </li>
              <li className="mb-2">
                <Link href="/services/digital-marketing" className="text-sm hover:underline">Vendor</Link>
              </li>
              <li className="mb-2">
                <Link href="/services/seo" className="text-sm hover:underline">Orders</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-1/2 sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="font-bold text-lg mb-2">Contact Us</h5>
            <ul>
              <li className="mb-2 text-sm">Email: contact@meditrack.com</li>
              <li className="mb-2 text-sm">Phone: +123 456 7890</li>
              <li className="mb-2 text-sm">Address: 123 Main St, Pune, India</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-1/3 sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="font-bold text-lg mb-2">Follow Us</h5>
            <ul className="flex flex-col sm:flex-row">
              <li className="mr-4">
                <Link href="https://facebook.com" className="text-sm hover:underline">Facebook</Link>
              </li>
              <li className="mr-4">
                <Link href="https://twitter.com" className="text-sm hover:underline">Twitter</Link>
              </li>
              <li className="mr-4">
                <Link href="https://linkedin.com" className="text-sm hover:underline">LinkedIn</Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="text-sm hover:underline">Instagram</Link>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 MediTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
