// src/app/shop/page.tsx
import Link from 'next/link';
import ShopProductSlider from '@/components/ShopProductSlider';

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">Smart Devices Shop</h1>
      <p className="mb-6 text-gray-700">Welcome to our smart devices shop. We&apos;re preparing a selection of cutting-edge smart home products to complement our software solutions.</p>
      
      {/* Featured Products Slider */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Featured Products</h2>
        <ShopProductSlider 
          products={[
            {
              id: 'smart-hub',
              name: 'Smart Home Hub',
              description: 'Central control hub for all your smart home devices. Compatible with over 100 smart home brands, with voice control integration and mobile app access.',
              imageUrl: '/images/products/smart-hub.png',
              status: 'coming-soon',
              primaryAction: {
                label: 'Join waitlist',
                href: '#contact'
              },
              secondaryAction: {
                label: 'Learn more',
                href: '/shop/products/smart-hub'
              }
            },
            {
              id: 'security-camera',
              name: 'Smart Security Camera',
              description: 'HD security camera with motion detection and night vision. Features 1080p HD video quality, motion detection alerts, and two-way audio.',
              imageUrl: '/images/products/security-camera.png',
              status: 'coming-soon',
              primaryAction: {
                label: 'Join waitlist',
                href: '#contact'
              },
              secondaryAction: {
                label: 'Learn more',
                href: '/shop/products/security-camera'
              }
            },
            {
              id: 'smart-thermostat',
              name: 'Smart Thermostat',
              description: 'Energy-saving thermostat with remote control capabilities. This smart thermostat learns your schedule and preferences to save energy while keeping your home comfortable.',
              imageUrl: '/images/products/smart-thermostat.png',
              status: 'coming-soon',
              primaryAction: {
                label: 'Join waitlist',
                href: '#contact'
              },
              secondaryAction: {
                label: 'Learn more',
                href: '/shop/products/smart-thermostat'
              }
            }
          ]}
          autoRotateInterval={8000} // 8 seconds
        />
      </div>
      
      {/* Shop Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        <Link href="/shop/products" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="bg-cyan-50 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 className="text-lg font-bold mb-1 text-gray-800">Browse Products</h2>
            <p className="text-gray-700 text-sm">View all our available products</p>
          </div>
        </Link>
        
        <Link href="/shop/cart" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="bg-cyan-50 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold mb-1 text-gray-800">Shopping Cart</h2>
            <p className="text-gray-700 text-sm">View your cart items</p>
          </div>
        </Link>
        
        <Link href="/" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="bg-cyan-50 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h2 className="text-lg font-bold mb-1 text-gray-800">Back to Home</h2>
            <p className="text-gray-700 text-sm">Return to the main site</p>
          </div>
        </Link>
      </div>
      
      {/* Coming Soon Banner */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8">
            <h2 className="text-xl font-bold mb-3 text-gray-800">Smart Home Collection Coming Soon</h2>
            <p className="text-gray-700 mb-4 text-sm">
            We&apos;re excited to announce that We&apos;ll soon be launching our complete range of smart home products to help you create a seamlessly connected living space. Our devices are designed to work perfectly with our software solutions for an integrated experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link 
                href="#contact" 
                className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-5 rounded-md transition-colors text-center text-sm"
              >
                Get Notified
              </Link>
              <Link 
                href="/shop/products" 
                className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-5 rounded-md transition-colors text-center text-sm"
              >
                Preview Devices
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
            <div className="w-28 h-28 bg-cyan-50 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}