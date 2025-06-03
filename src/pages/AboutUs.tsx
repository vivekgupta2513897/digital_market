import React from 'react';
import { LightBulbIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Digital Marketplace</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize digital commerce by connecting buyers and sellers in a seamless, secure, and innovative marketplace.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <LightBulbIcon className="h-12 w-12 text-purple-600 mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses and individuals by providing a trusted platform for digital commerce, 
              fostering innovation, and creating opportunities for growth in the digital economy.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <HeartIcon className="h-12 w-12 text-purple-600 mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the world's most trusted digital marketplace, where anyone can buy and sell digital products 
              with confidence, security, and ease.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <ShieldCheckIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust & Security</h3>
              <p className="text-gray-600">
                We prioritize the security of our users and maintain the highest standards of trust in all our operations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <HeartIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make is guided by our commitment to providing the best experience for our customers.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <LightBulbIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to provide cutting-edge solutions and stay ahead of market trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 