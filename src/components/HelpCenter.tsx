import React from 'react';
import { QuestionMarkCircleIcon, ShoppingBagIcon, CreditCardIcon, TruckIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'How do I place an order?',
    answer: 'Browse our products, add items to your cart, and proceed to checkout. Follow the simple steps to complete your purchase.',
    icon: ShoppingBagIcon,
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, UPI, net banking, and digital wallets like Paytm and Google Pay.',
    icon: CreditCardIcon,
  },
  {
    question: 'How long does delivery take?',
    answer: 'Standard delivery takes 3-5 business days. Express delivery is available for 1-2 day shipping.',
    icon: TruckIcon,
  },
];

const HelpCenter = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h2>
          <p className="text-lg text-gray-600">Find answers to frequently asked questions</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <faq.icon className="h-8 w-8 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{faq.question}</h3>
              </div>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact-support"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter; 