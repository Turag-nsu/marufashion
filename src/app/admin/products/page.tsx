'use client';

import React, { useEffect, useState } from 'react';
import AdminProductCard from './AdminProductCard';
import { fetchProducts } from '@/lib/api/products'; // Adjust the import path as needed
import { Alert } from '@/shared/Alert/Alert';

export default function AdminProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch products on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        // console.log('Products:', data[0]);
        setProducts(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Something went wrong while fetching products.');
      }
    };

    loadProducts();
  }, []);

  // Handlers for edit and delete actions
  const handleEdit = (id: string) => {
    console.log('Edit product:', id);
    // Implement your edit logic here
  };

  const handleDelete = (id: string) => {
    console.log('Delete product:', id);
    // Implement your delete logic here
  };

  if (error) {
    return (
      <Alert type="error" containerClassName="my-4">
        {error}
      </Alert>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        No products available. Add some products to see them here.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {products.map((product: any) => (
        <AdminProductCard
          key={product._id}
          product={product}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
