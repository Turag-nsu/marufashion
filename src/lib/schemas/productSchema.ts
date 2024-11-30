import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  category: z.string().min(1, 'Product category is required'),
  details: z.string().min(1, 'Product details are required'),
  price: z.number().positive('Price must be a positive number'),
  //image array
  images: z.array(z.string()).min(1, 'Product images are required'),
});

export type Product = z.infer<typeof productSchema>;
