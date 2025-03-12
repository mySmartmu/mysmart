// src/app/shop/cart/page.tsx
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      
      {/* Empty cart message */}
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <div className="w-24 h-24 mx-auto bg-cyan-50 rounded-full flex items-center justify-center mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-cyan-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your cart is empty</h2>
        <p className="text-gray-700 mb-8 max-w-md mx-auto">Looks like you haven&apos;t added any products to your cart yet. Browse our products to find something you&apos;ll love!</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/shop/products"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Browse Products
          </Link>
          
          <Link 
            href="/shop"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-md transition-colors"
          >
            Return to Shop
          </Link>
        </div>
      </div>
      
      {/* Suggested products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">You might like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-gray-100 h-40 mb-4 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Smart Home Hub</h3>
            <p className="text-gray-700 mb-3">Central control hub for all your smart home devices</p>
            <p className="text-cyan-600 font-bold mb-4">$149.99</p>
            <Link 
              href="/shop/products/smart-hub"
              className="inline-block w-full bg-cyan-50 hover:bg-cyan-100 text-cyan-600 font-medium py-2 px-4 rounded-md transition-colors text-center"
            >
              View Product
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-gray-100 h-40 mb-4 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Smart Security Camera</h3>
            <p className="text-gray-700 mb-3">HD security camera with motion detection</p>
            <p className="text-cyan-600 font-bold mb-4">$99.99</p>
            <Link 
              href="/shop/products/security-camera"
              className="inline-block w-full bg-cyan-50 hover:bg-cyan-100 text-cyan-600 font-medium py-2 px-4 rounded-md transition-colors text-center"
            >
              View Product
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-gray-100 h-40 mb-4 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Smart Thermostat</h3>
            <p className="text-gray-700 mb-3">Energy-saving thermostat with remote control</p>
            <p className="text-cyan-600 font-bold mb-4">$79.99</p>
            <Link 
              href="/shop/products/smart-thermostat"
              className="inline-block w-full bg-cyan-50 hover:bg-cyan-100 text-cyan-600 font-medium py-2 px-4 rounded-md transition-colors text-center"
            >
              View Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}