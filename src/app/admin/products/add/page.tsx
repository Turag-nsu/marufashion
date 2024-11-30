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
    //images upload to array
    const uploadImages = async (images: File[]) => {
        const imagePaths = [];
        for (const image of images) {
            const imageResponse = await uploadImage(image);
            imagePaths.push(imageResponse.filePath);
        }
        return imagePaths;
    }
    try {
      const imageResponse = await uploadImages(
        [ formData.image, formData.subImage1, formData.subImage2]
      );
      const newProduct = {
        name: formData.name,
        category: formData.category,
        details: formData.details,
        price: formData.price,
        image: imageResponse,
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
