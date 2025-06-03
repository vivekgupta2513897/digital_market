import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useStore } from '../store/store';

const Navbar = () => {
  const { cart } = useStore();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Digital Marketplace
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/catalog" className="hover:text-purple-200 transition-colors">
              Products
            </Link>
            <Link to="/help" className="hover:text-purple-200 transition-colors">
              Help Center
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/help" className="p-2 hover:bg-purple-700 rounded-full transition-colors">
              <QuestionMarkCircleIcon className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="p-2 hover:bg-purple-700 rounded-full transition-colors relative">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="p-2 hover:bg-purple-700 rounded-full transition-colors">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 