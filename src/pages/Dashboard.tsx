import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChartBarIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Total Products',
    value: '156',
    icon: ShoppingBagIcon,
    color: 'bg-blue-500',
  },
  {
    name: 'Total Orders',
    value: '89',
    icon: ChartBarIcon,
    color: 'bg-green-500',
  },
  {
    name: 'Total Sales',
    value: '$12,345',
    icon: CurrencyDollarIcon,
    color: 'bg-yellow-500',
  },
  {
    name: 'Total Customers',
    value: '234',
    icon: UserGroupIcon,
    color: 'bg-purple-500',
  },
];

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg h-screen fixed">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Vendor Dashboard</h2>
        </div>
        <nav className="mt-4">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Overview
          </Link>
          <Link
            to="/products"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Products
          </Link>
          <Link
            to="/orders"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Orders
          </Link>
          <Link
            to="/reports"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Reports
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center">
                <div
                  className={`p-3 rounded-full ${stat.color} bg-opacity-10`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">New Order #1234</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
                <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                  Processing
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Product "Blue Jeans" Updated</p>
                  <p className="text-sm text-gray-500">5 hours ago</p>
                </div>
                <span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                  Updated
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">New Review Received</p>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
                <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                  Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 