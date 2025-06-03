import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBagIcon, 
  TagIcon, 
  TruckIcon, 
  ShieldCheckIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import { products } from '../data/products';

const Home: React.FC = () => {
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<string, boolean>>({});
  
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);
  
  // Get categories with their first product image
  const categories = Array.from(new Set(products.map(product => product.category)))
    .map(category => ({
      name: category,
      image: products.find(p => p.category === category)?.image || '',
      count: products.filter(p => p.category === category).length
    }));

  const handleImageError = (imageUrl: string) => {
    setImageLoadErrors(prev => ({ ...prev, [imageUrl]: true }));
  };

  const getFallbackImage = (category: string) => {
    // Return a relevant fallback image based on category
    return `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=300&fit=crop`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Digital Marketplace
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover amazing products at unbeatable prices
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Shop Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <ShoppingBagIcon className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">Browse through thousands of products across multiple categories</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <TagIcon className="h-12 w-12 text-pink-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-600">Find the best deals and discounts on premium products</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <TruckIcon className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable shipping to your doorstep</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure Shopping</h3>
            <p className="text-gray-600">Safe and secure payment options for all transactions</p>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link to="/catalog" className="text-purple-600 hover:text-purple-700 flex items-center">
              View All
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-bold">₹{product.price}</span>
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/catalog?category=${encodeURIComponent(category.name)}`}
                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative aspect-w-4 aspect-h-3 bg-gray-100">
                  <img
                    src={imageLoadErrors[category.image] ? getFallbackImage(category.name) : category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
                    onError={() => handleImageError(category.image)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count} products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
            <p className="text-lg opacity-90">Limited time deals you don't want to miss</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <FireIcon className="h-8 w-8 text-red-500" />
                <h3 className="text-xl font-semibold ml-2">Flash Sale</h3>
              </div>
              <p className="text-gray-600 mb-4">Up to 50% off on selected items</p>
              <div className="flex items-center text-gray-500">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>Ends in 24 hours</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <TagIcon className="h-8 w-8 text-purple-500" />
                <h3 className="text-xl font-semibold ml-2">New Arrivals</h3>
              </div>
              <p className="text-gray-600 mb-4">Get 20% off on new products</p>
              <div className="flex items-center text-gray-500">
                <StarIcon className="h-5 w-5 mr-2" />
                <span>Limited stock</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <TruckIcon className="h-8 w-8 text-pink-500" />
                <h3 className="text-xl font-semibold ml-2">Free Shipping</h3>
              </div>
              <p className="text-gray-600 mb-4">On orders over $100</p>
              <div className="flex items-center text-gray-500">
                <ShieldCheckIcon className="h-5 w-5 mr-2" />
                <span>Valid for all users</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-white opacity-90 mb-6">Subscribe to our newsletter for the latest updates and offers</p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-white text-purple-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 