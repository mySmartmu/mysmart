// src/components/shop/CartItem.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  id,
  name,
  price,
  quantity,
  image = '/images/products/placeholder.png',
  onUpdateQuantity,
  onRemove
}: CartItemProps) {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setItemQuantity(newQuantity);
    onUpdateQuantity(id, newQuantity);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-gray-200">
      <div className="flex-shrink-0 w-full sm:w-24 h-24 relative mb-4 sm:mb-0 sm:mr-6">
        <Image
          src={image}
          alt={name}
          width={96}
          height={96}
          className="object-cover rounded-md"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-medium text-gray-800">{name}</h3>
        <p className="text-cyan-600 font-medium">${price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center mt-4 sm:mt-0">
        <div className="flex items-center border border-gray-300 rounded-md mr-4">
          <button
            onClick={() => handleQuantityChange(itemQuantity - 1)}
            className="px-3 py-1 text-gray-600 hover:text-gray-800"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="px-3 py-1 text-gray-800">{itemQuantity}</span>
          <button
            onClick={() => handleQuantityChange(itemQuantity + 1)}
            className="px-3 py-1 text-gray-600 hover:text-gray-800"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        
        <button
          onClick={() => onRemove(id)}
          className="text-red-500 hover:text-red-700"
          aria-label="Remove item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}