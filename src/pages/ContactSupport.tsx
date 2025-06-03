import React, { useState, useRef, useEffect } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  ChatBubbleLeftRightIcon, 
  PaperAirplaneIcon, 
  XMarkIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

const ContactSupport = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hi! 👋 I'm your virtual assistant. How can I help you today?", 
      sender: "support",
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target as Node)) {
        setIsMinimized(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Add user message
      const userMessage: Message = {
        id: Date.now(),
        text: newMessage,
        sender: "user",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage("");
      setIsTyping(true);

      // Simulate support response after 1-2 seconds
      setTimeout(() => {
        setIsTyping(false);
        const supportMessage: Message = {
          id: Date.now() + 1,
          text: getSupportResponse(newMessage),
          sender: "support",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, supportMessage]);
      }, Math.random() * 1000 + 1000);
    }
  };

  const getSupportResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('order') || lowerMessage.includes('track')) {
      return "I can help you track your order. Could you please provide your order number?";
    } else if (lowerMessage.includes('return') || lowerMessage.includes('refund')) {
      return "For returns and refunds, please visit our Returns page or provide your order number for specific assistance.";
    } else if (lowerMessage.includes('payment') || lowerMessage.includes('pay')) {
      return "We accept various payment methods including UPI, credit/debit cards, and net banking. Is there a specific payment issue you're facing?";
    } else if (lowerMessage.includes('delivery') || lowerMessage.includes('shipping')) {
      return "Our standard delivery takes 3-5 business days. For express delivery, we offer next-day delivery in select cities.";
    } else {
      return "Thank you for your message. Our support team will get back to you shortly. In the meantime, you can check our FAQ section for quick answers to common questions.";
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Support</h1>
          <p className="text-lg text-gray-600">Choose your preferred way to reach us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email Support */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <EnvelopeIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
            <p className="text-gray-600 mb-6">
              Get in touch with our support team via email. We typically respond within 24 hours.
            </p>
            <a
              href="mailto:support@digitalmarketplace.com"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              support@digitalmarketplace.com
            </a>
          </div>

          {/* Live Chat */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <ChatBubbleLeftRightIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Chat</h3>
            <p className="text-gray-600 mb-6">
              Chat with our support team in real-time. Available 24/7 for immediate assistance.
            </p>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              Start Chat
            </button>
          </div>

          {/* Phone Support */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <PhoneIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
            <p className="text-gray-600 mb-6">
              Speak directly with our support team. Available Monday to Friday, 9 AM to 6 PM IST.
            </p>
            <a
              href="tel:+911800180018"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              +91 1800 1800 18
            </a>
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Support Hours</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 9:00 AM - 6:00 PM IST</li>
                <li>Saturday: 10:00 AM - 4:00 PM IST</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 9:00 AM - 8:00 PM IST</li>
                <li>Saturday: 10:00 AM - 6:00 PM IST</li>
                <li>Sunday: 10:00 AM - 4:00 PM IST</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Floating Chat Button */}
        {!isChatOpen && (
          <button
            onClick={() => {
              setIsChatOpen(true);
              setIsMinimized(false);
            }}
            className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110"
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
          </button>
        )}

        {/* Chat Interface */}
        {isChatOpen && (
          <div
            ref={chatWindowRef}
            className={`fixed bottom-6 right-6 w-96 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
              isMinimized ? 'h-16' : 'h-[500px]'
            }`}
          >
            <div 
              className="bg-purple-600 text-white p-4 flex justify-between items-center cursor-pointer"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <div className="flex items-center gap-2">
                <UserCircleIcon className="h-6 w-6" />
                <h3 className="text-lg font-semibold">Live Chat Support</h3>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsChatOpen(false);
                }}
                className="text-white hover:text-gray-200"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            {!isMinimized && (
              <>
                <div className="h-[380px] overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className="flex flex-col max-w-[80%]">
                        <div
                          className={`rounded-lg p-3 ${
                            message.sender === 'user'
                              ? 'bg-purple-600 text-white rounded-br-none'
                              : 'bg-gray-100 text-gray-900 rounded-bl-none'
                          }`}
                        >
                          {message.text}
                        </div>
                        <span className={`text-xs text-gray-500 mt-1 ${
                          message.sender === 'user' ? 'text-right' : 'text-left'
                        }`}>
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-900 rounded-lg p-3 rounded-bl-none">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                    >
                      <PaperAirplaneIcon className="h-6 w-6" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSupport; 