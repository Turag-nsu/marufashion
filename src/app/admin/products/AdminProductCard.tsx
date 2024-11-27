import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

interface AdminProductCardProps {
  product: {
    _id: string;
    name: string;
    price: number;
    image: string;
    details: string;
  };
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const AdminProductCard: React.FC<AdminProductCardProps> = ({ product, onEdit, onDelete }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      {/* Product Image */}
      <div className="w-24 h-24 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {product.name}
        </h3>
        {/* id */}
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          ...{product._id.slice(product._id.length-10,product._id.length)}
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {product.details.slice(0, 20)}...
        </p>
        <p className="mt-2 text-green-600 font-medium dark:text-green-400">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(product.id)}
          className="p-2 text-blue-600 rounded-md hover:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-300 dark:text-blue-400 dark:hover:bg-gray-700"
        >
          <PencilIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="p-2 text-red-600 rounded-md hover:bg-red-100 focus:outline-none focus:ring focus:ring-red-300 dark:text-red-400 dark:hover:bg-gray-700"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AdminProductCard;
