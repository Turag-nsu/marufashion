// import { useQuery } from '@tanstack/react-query';
// import { apiClient } from '@/lib/apiClient';  // Adjust according to your file structure

// export const useProducts = () => {
//   return useQuery(
//     ['products'],  // Query key
//     async () => {
//       const { data } = await apiClient.get('/api/products');  // Replace with the correct API endpoint
//       return data;
//     },
//   );
// };