// src/app/shop/products/[slug]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  details: string;
  features: string[];
  imageUrl: string;
  status: 'in-stock' | 'coming-soon';
};

type ProductKey = 'smart-hub' | 'security-camera' | 'smart-thermostat';

const products: Record<ProductKey, Product> = {
  'smart-hub': {
    id: 'smart-hub',
    name: 'Smart Home Hub',
    description: 'Central control hub for all your smart home devices',
    price: 149.99,
    details: 'The Smart Home Hub connects all your smart devices in one central system. Control lights, security, climate, and more from a single interface.',
    features: [
      'Compatible with over 100 smart home brands',
      'Voice control integration',
      'Mobile app access',
      'Automated scenes and routines',
      'Energy usage monitoring'
    ],
    imageUrl: '/images/products/smart-hub.png',
    status: 'coming-soon'
  },
  'security-camera': {
    id: 'security-camera',
    name: 'Smart Security Camera',
    description: 'HD security camera with motion detection and night vision',
    price: 99.99,
    details: 'Keep your home secure with this high-definition smart security camera. Features motion detection, night vision, and cloud storage.',
    features: [
      '1080p HD video quality',
      'Motion detection alerts',
      'Night vision up to 30ft',
      'Two-way audio',
      '7-day cloud storage included'
    ],
    imageUrl: '/images/products/security-camera.png',
    status: 'coming-soon'
  },
  'smart-thermostat': {
    id: 'smart-thermostat',
    name: 'Smart Thermostat',
    description: 'Energy-saving thermostat with remote control capabilities',
    price: 79.99,
    details: 'This smart thermostat learns your schedule and preferences to save energy while keeping your home comfortable. Control from anywhere using your smartphone.',
    features: [
      'Learning algorithm adapts to your preferences',
      'Energy usage reports',
      'Remote control via smartphone',
      'Compatible with most HVAC systems',
      'Easy DIY installation'
    ],
    imageUrl: '/images/products/smart-thermostat.png',
    status: 'coming-soon'
  }
};

export function generateStaticParams() {
  return (Object.keys(products) as ProductKey[]).map((slug) => ({
    slug
  }));
}

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  // Type guard with proper type narrowing
  const isValidSlug = (slug: string): slug is ProductKey => {
    return Object.keys(products).includes(slug);
  };

  if (!isValidSlug(slug)) {
    notFound();
  }

  const product = products[slug];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="mb-6">
        <Link 
          href="/shop/products"
          className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Products
        </Link>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Product Images */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center relative">
            {product.imageUrl ? (
              <div className="relative h-80 w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="bg-gray-100 h-80 w-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            )}
            
            {/* Status badge */}
            {product.status === 'coming-soon' && (
              <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                Coming Soon
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="p-8 md:p-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-cyan-600">${product.price.toFixed(2)}</span>
              {product.status === 'coming-soon' && (
                <span className="ml-4 text-gray-500 text-sm italic">Pre-order available soon</span>
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Description</h2>
              <p className="text-gray-700 leading-relaxed">{product.details}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-4">
              <button 
                className={`${
                  product.status === 'coming-soon' 
                    ? 'bg-gray-200 cursor-not-allowed' 
                    : 'bg-cyan-600 hover:bg-cyan-700'
                } text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center`}
                disabled={product.status === 'coming-soon'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {product.status === 'coming-soon' ? 'Coming Soon' : 'Add to Cart'}
              </button>
              
              <Link
                href="#contact"
                className="border border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Get Notified
              </Link>
            </div>
            
            {/* Additional product info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Compatibility</h3>
                  <p className="text-gray-700">Works with most smart home devices</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Connectivity</h3>
                  <p className="text-gray-700">Wi-Fi, Bluetooth, Zigbee</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Warranty</h3>
                  <p className="text-gray-700">2-year limited warranty</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Support</h3>
                  <p className="text-gray-700">Lifetime technical support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">You might also like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(Object.keys(products) as ProductKey[])
            .filter(key => key !== slug)
            .map(key => (
              <Link 
                key={key}
                href={`/shop/products/${key}`}
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  {products[key].imageUrl ? (
                    <div className="relative h-40 w-40">
                      <Image
                        src={products[key].imageUrl}
                        alt={products[key].name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 text-gray-800">{products[key].name}</h3>
                  <p className="text-gray-600 mb-2 line-clamp-2">{products[key].description}</p>
                  <p className="text-cyan-600 font-bold">${products[key].price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}