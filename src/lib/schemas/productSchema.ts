import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  details: z.string().min(1, 'Product details are required'),
  price: z.number().positive('Price must be a positive number'),
  image: z.string().url('Image URL must be valid'), // Store the file path or URL
});

export type Product = z.infer<typeof productSchema>;
