// src/components/shop/ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  status?: 'in-stock' | 'low-stock' | 'out-of-stock' | 'coming-soon';
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image = '/images/products/placeholder.png',
  status = 'in-stock'
}: ProductCardProps) {
  // Status badge styling
  const getBadgeStyles = () => {
    switch (status) {
      case 'in-stock':
        return 'bg-green-100 text-green-800';
      case 'low-stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'out-of-stock':
        return 'bg-red-100 text-red-800';
      case 'coming-soon':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'in-stock':
        return 'In Stock';
      case 'low-stock':
        return 'Low Stock';
      case 'out-of-stock':
        return 'Out of Stock';
      case 'coming-soon':
        return 'Coming Soon';
      default:
        return '';
    }
  };

  return (
    <Link 
      href={`/shop/products/${id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {status && (
          <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium ${getBadgeStyles()}`}>
            {getStatusText()}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{name}</h2>
        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-cyan-600 font-bold">${price.toFixed(2)}</p>
          <span className="inline-flex items-center justify-center w-8 h-8 bg-cyan-50 rounded-full hover:bg-cyan-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}