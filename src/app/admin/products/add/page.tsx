'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { uploadImage, createProduct } from '@/lib/api/products';
import ProductForm from '@/components/ProductForm';
import SuccessModal from '@/shared/SuccessModal/SuccessModal';

export default function AddProductPage() {
  const router = useRouter();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = async (formData: any) => {
    try {
      const imageResponse = await uploadImage(formData.image);
      const newProduct = {
        name: formData.name,
        details: formData.details,
        price: formData.price,
        image: imageResponse.filePath,
      };
      const res = await createProduct(newProduct);
      if (res.success) {
        setIsSuccessModalOpen(true); // Open success modal
        setTimeout(() => {
          setIsSuccessModalOpen(false);
        //   router.push('/products'); // Redirect after success
        }, 3000); // Delay for modal close
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <SuccessModal
        message="Product added successfully!"
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />

      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
}
