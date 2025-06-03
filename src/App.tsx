import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store/store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProductCatalog from './pages/ProductCatalog';
import Cart from './pages/Cart';
import ProductManagement from './pages/ProductManagement';
import OrderManagement from './pages/OrderManagement';
import SalesReports from './pages/SalesReports';
import HelpCenter from './components/HelpCenter';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ContactSupport from './pages/ContactSupport';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';

const App = () => {
  const { isAuthenticated, user } = useStore();

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalog" element={<ProductCatalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-support" element={<ContactSupport />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            
            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                isAuthenticated && user?.role === 'vendor' ? (
                  <Dashboard />
                ) : (
                  <div className="text-center py-12">
                    <h2 className="text-3xl font-bold text-purple-600 mb-4">Welcome to Digital Marketplace</h2>
                    <p className="text-gray-600">Please login to access the vendor dashboard</p>
                  </div>
                )
              }
            />
            <Route
              path="/products"
              element={
                isAuthenticated && user?.role === 'vendor' ? (
                  <ProductManagement />
                ) : (
                  <div className="text-center py-12">
                    <h2 className="text-3xl font-bold text-purple-600 mb-4">Welcome to Digital Marketplace</h2>
                    <p className="text-gray-600">Please login to access product management</p>
                  </div>
                )
              }
            />
            <Route
              path="/orders"
              element={
                isAuthenticated && user?.role === 'vendor' ? (
                  <OrderManagement />
                ) : (
                  <div className="text-center py-12">
                    <h2 className="text-3xl font-bold text-purple-600 mb-4">Welcome to Digital Marketplace</h2>
                    <p className="text-gray-600">Please login to access order management</p>
                  </div>
                )
              }
            />
            <Route
              path="/reports"
              element={
                isAuthenticated && user?.role === 'vendor' ? (
                  <SalesReports />
                ) : (
                  <div className="text-center py-12">
                    <h2 className="text-3xl font-bold text-purple-600 mb-4">Welcome to Digital Marketplace</h2>
                    <p className="text-gray-600">Please login to access sales reports</p>
                  </div>
                )
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 