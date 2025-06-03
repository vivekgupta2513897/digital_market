import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/store';
import { BanknotesIcon, CreditCardIcon } from '@heroicons/react/24/outline';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useStore();
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState({
    fullName: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'upi' | null>(null);
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === 'cod') {
      setIsProcessing(true);
      // Simulate order processing
      setTimeout(() => {
        clearCart();
        navigate('/order-confirmation');
      }, 2000);
    } else if (paymentMethod === 'upi') {
      setIsProcessing(true);
      // Simulate UPI payment
      setTimeout(() => {
        clearCart();
        navigate('/order-confirmation');
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'
            }`}>
              1
            </div>
            <div className={`w-24 h-1 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'
            }`}>
              2
            </div>
            <div className={`w-24 h-1 ${step >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200'
            }`}>
              3
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Step 1: Delivery Address */}
          {step === 1 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Address</h2>
              <form onSubmit={handleAddressSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      value={address.fullName}
                      onChange={(e) => setAddress({...address, fullName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Street Address</label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      value={address.street}
                      onChange={(e) => setAddress({...address, street: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">City</label>
                      <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        value={address.city}
                        onChange={(e) => setAddress({...address, city: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">State</label>
                      <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        value={address.state}
                        onChange={(e) => setAddress({...address, state: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Pincode</label>
                      <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        value={address.pincode}
                        onChange={(e) => setAddress({...address, pincode: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        value={address.phone}
                        onChange={(e) => setAddress({...address, phone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                >
                  Continue to Payment
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Payment Method */}
          {step === 2 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
              <form onSubmit={handlePaymentSubmit}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                       onClick={() => setPaymentMethod('cod')}>
                    <input
                      type="radio"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="h-4 w-4 text-purple-600"
                    />
                    <BanknotesIcon className="h-6 w-6 text-gray-600" />
                    <div>
                      <h3 className="font-medium">Cash on Delivery</h3>
                      <p className="text-sm text-gray-500">Pay when you receive your order</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                       onClick={() => setPaymentMethod('upi')}>
                    <input
                      type="radio"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="h-4 w-4 text-purple-600"
                    />
                    <CreditCardIcon className="h-6 w-6 text-gray-600" />
                    <div>
                      <h3 className="font-medium">UPI Payment</h3>
                      <p className="text-sm text-gray-500">Pay using any UPI app</p>
                    </div>
                  </div>

                  {paymentMethod === 'upi' && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">UPI ID</label>
                      <input
                        type="text"
                        required
                        placeholder="example@upi"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="mt-6 border-t pt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold text-primary-600">₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing || !paymentMethod}
                  className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 disabled:bg-gray-400"
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout; 