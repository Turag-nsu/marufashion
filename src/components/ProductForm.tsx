'use client';

import { useState } from 'react';

export default function ProductForm({ onSubmit, initialData }: any) {
    const [formData, setFormData] = useState(initialData || {});
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [subImagePreviews, setSubImagePreviews] = useState<{
        subImage1: string | null;
        subImage2: string | null;
    }>({
        subImage1: null,
        subImage2: null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (type === 'image') {
                    setPreviewImage(reader.result as string);
                } else {
                    setSubImagePreviews((prev) => ({
                        ...prev,
                        [type]: reader.result as string,
                    }));
                }
            };
            reader.readAsDataURL(file);

            setFormData((prev: any) => ({ ...prev, [type]: file }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('ProductForm handleSubmit formData', formData);
        onSubmit(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto my-4 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 space-y-6 transform transition-all duration-300 hover:shadow-2xl"
        >
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center">
                Upload Product
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center">
                Fill in the details below to add your product.
            </p>

            {/* Name Field */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                    Product Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter product name"
                    value={formData.name || ''}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Category Field */}
            <div>
                <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                    Product Category
                </label>
                <select
                    name="category"
                    id="category"
                    value={formData.category || ''}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="">Select a category</option>
                    <option value="saree">Saree</option>
                    <option value="threePiece">Three Piece</option>
                    <option value="beauty">Beauty</option>
                    <option value="baby">Baby</option>
                    <option value="others">Others</option>
                </select>
            </div>

            {/* Details Field */}
            <div>
                <label
                    htmlFor="details"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                    Product Details
                </label>
                <textarea
                    name="details"
                    id="details"
                    placeholder="Enter product details"
                    value={formData.details || ''}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Price Field */}
            <div>
                <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                    Price (USD)
                </label>
                <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Enter product price"
                    value={formData.price || ''}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Main Image Upload Field */}
            <div>
                <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                    Product Title Image
                </label>
                <div className="flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 relative">
                    <input
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'image')}
                        required
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {previewImage ? (
                        <img
                            src={previewImage}
                            alt="Preview"
                            className="max-h-32 object-contain"
                        />
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            Drag & drop or click to upload
                        </p>
                    )}
                </div>
            </div>

            {/* Sub Images */}
            {['subImage1', 'subImage2'].map((key) => (
                <div key={key}>
                    <label
                        htmlFor={key}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                        {key === 'subImage1' ? 'Sub Image 1' : 'Sub Image 2'}
                    </label>
                    <div className="flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 relative">
                        <input
                            type="file"
                            name={key}
                            id={key}
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, key)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {subImagePreviews[key as keyof typeof subImagePreviews] ? (
                            <img
                                src={
                                    subImagePreviews[key as keyof typeof subImagePreviews] as string
                                }
                                alt="Preview"
                                className="max-h-32 object-contain"
                            />
                        ) : (
                            <p className="text-gray-500 dark:text-gray-400 text-center">
                                Drag & drop or click to upload
                            </p>
                        )}
                    </div>
                </div>
            ))}

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                Submit Product
            </button>
        </form>
    );
}
