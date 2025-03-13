// src/app/shop/products/page.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/shop/ProductCard';

// Mock products data
const allProducts = [
  {
    id: 'smart-hub',
    name: 'Smart Home Hub',
    description: 'Central control hub for all your smart home devices',
    price: 149.99,
    image: '/images/products/smart-hub.png',
    status: 'in-stock',
    category: 'control'
  },
  {
    id: 'security-camera',
    name: 'Smart Security Camera',
    description: 'HD security camera with motion detection and night vision',
    price: 99.99,
    image: '/images/products/security-camera.png',
    status: 'in-stock',
    category: 'security'
  },
  {
    id: 'smart-thermostat',
    name: 'Smart Thermostat',
    description: 'Energy-saving thermostat with remote control capabilities',
    price: 79.99,
    image: '/images/products/smart-thermostat.png',
    status: 'in-stock',
    category: 'climate'
  },
  {
    id: 'smart-lighting',
    name: 'Smart Lighting Kit',
    description: 'Complete smart lighting solution for your home with customizable colors and schedules',
    price: 129.99,
    image: '/images/products/placeholder.png',
    status: 'coming-soon',
    category: 'lighting'
  },
  {
    id: 'smart-door-lock',
    name: 'Smart Door Lock',
    description: 'Keyless entry with smartphone control and activity monitoring',
    price: 199.99,
    image: '/images/products/placeholder.png',
    status: 'coming-soon',
    category: 'security'
  }
];

export default function ProductsPage() {
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter and sort products
  const filteredProducts = allProducts.filter(product => 
    category === 'all' || product.category === category
  );
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
      default:
        return 0; // Keep original order for newest
    }
  });

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6">
      {/* Mobile-friendly header with filters toggle */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Products</h1>
        
        <div className="flex items-center">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="sm:hidden mr-2 p-2 text-gray-700 border border-gray-300 rounded-md flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1zm0 8a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1zm0 8a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1z" />
            </svg>
            Filters
          </button>
          
          {/* Desktop filters always visible */}
          <div className="hidden sm:flex space-x-3">
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
            >
              <option value="all">All Categories</option>
              <option value="security">Security</option>
              <option value="climate">Climate Control</option>
              <option value="lighting">Lighting</option>
              <option value="control">Control</option>
            </select>
            
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Mobile filters - collapsible */}
      {isFilterOpen && (
        <div className="sm:hidden mb-6 p-4 bg-gray-50 rounded-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            >
              <option value="all">All Categories</option>
              <option value="security">Security</option>
              <option value="climate">Climate Control</option>
              <option value="lighting">Lighting</option>
              <option value="control">Control</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      )}
      
      {/* Product count */}
      <p className="text-sm text-gray-600 mb-4">
        Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
      </p>
      
      {/* Products grid - responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {sortedProducts.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            status={product.status as 'in-stock' | 'coming-soon' | 'out-of-stock'}
          />
        ))}
      </div>
      
      {/* Back link */}
      <div className="mt-8">
        <Link 
          href="/shop"
          className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Shop
        </Link>
      </div>
    </div>
  );
}