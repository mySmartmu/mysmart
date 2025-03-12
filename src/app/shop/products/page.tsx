// src/app/shop/products/page.tsx
import Link from 'next/link';
import ProductCard from '@/components/shop/ProductCard';

// Mock products data
const products = [
  {
    id: 'smart-hub',
    name: 'Smart Home Hub',
    description: 'Central control hub for all your smart home devices',
    price: 149.99,
    image: '/images/products/smart-hub.png',
    status: 'in-stock',
  },
  {
    id: 'security-camera',
    name: 'Smart Security Camera',
    description: 'HD security camera with motion detection and night vision',
    price: 99.99,
    image: '/images/products/security-camera.png',
    status: 'in-stock',
  },
  {
    id: 'smart-thermostat',
    name: 'Smart Thermostat',
    description: 'Energy-saving thermostat with remote control capabilities',
    price: 79.99,
    image: '/images/products/smart-thermostat.png',
    status: 'in-stock',
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        <div className="flex space-x-4">
          <select className="p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
            <option value="all">All Categories</option>
            <option value="security">Security</option>
            <option value="climate">Climate Control</option>
            <option value="lighting">Lighting</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
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
        
        {/* Coming Soon Products */}
        <ProductCard
          id="smart-lighting"
          name="Smart Lighting Kit"
          description="Complete smart lighting solution for your home with customizable colors and schedules"
          price={129.99}
          image="/images/products/placeholder.png"
          status="coming-soon"
        />
        
        <ProductCard
          id="smart-door-lock"
          name="Smart Door Lock"
          description="Keyless entry with smartphone control and activity monitoring"
          price={199.99}
          image="/images/products/placeholder.png"
          status="coming-soon"
        />
      </div>
      
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