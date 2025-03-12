// src/app/shop/checkout/page.tsx
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center py-12">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 mx-auto text-gray-400 mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h2 className="text-xl font-semibold mb-2">Checkout Not Available</h2>
          <p className="text-gray-600 mb-6">The checkout functionality is currently under development.</p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/shop/cart"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition-colors"
            >
              Back to Cart
            </Link>
            <Link 
              href="/shop/products"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}