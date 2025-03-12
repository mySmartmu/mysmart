// src/components/shop/CheckoutForm.tsx
'use client';
import { useState } from 'react';

interface CheckoutFormProps {
  subtotal: number;
  onSubmit: (formData: CheckoutFormData) => void;
}

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  paymentMethod: 'credit-card' | 'paypal';
}

export default function CheckoutForm({ subtotal, onSubmit }: CheckoutFormProps) {
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    country: 'Mauritius',
    paymentMethod: 'credit-card',
  });

  const shipping = 10.00;
  const tax = subtotal * 0.15;
  const total = subtotal + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="md:col-span-2">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h2>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-800"
          />
        </div>
      </div>

      <div className="md:col-span-2">
        <h2 className="text-xl font-bold mb-4 mt-4 text-gray-800">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-800"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-800"
            >
              <option value="Mauritius">Mauritius</option>
              <option value="Reunion">Reunion</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Seychelles">Seychelles</option>
            </select>
          </div>
        </div>
      </div>

      <div className="md:col-span-2">
        <h2 className="text-xl font-bold mb-4 mt-4 text-gray-800">Payment Method</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="credit-card"
              name="paymentMethod"
              value="credit-card"
              checked={formData.paymentMethod === 'credit-card'}
              onChange={handleChange}
              className="h-4 w-4 text-cyan-600 focus:ring-cyan-500"
            />
            <label htmlFor="credit-card" className="text-sm font-medium text-gray-700">
              Credit Card
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked={formData.paymentMethod === 'paypal'}
              onChange={handleChange}
              className="h-4 w-4 text-cyan-600 focus:ring-cyan-500"
            />
            <label htmlFor="paypal" className="text-sm font-medium text-gray-700">
              PayPal
            </label>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 mt-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-4 text-gray-800">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-800 font-medium">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="text-gray-800 font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2"></div>
            <div className="flex justify-between">
              <span className="text-gray-800 font-bold">Total</span>
              <span className="text-cyan-600 font-bold">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 mt-6">
        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
        >
          Complete Checkout
        </button>
      </div>
    </form>
  );
}