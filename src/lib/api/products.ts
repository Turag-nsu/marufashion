const API_BASE_URL = 'http://localhost:3000/api';

// Upload Image Function
export async function uploadImage(file: File): Promise<{ filePath: string }> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }

  return response.json();
}

// Create Product Function
export async function createProduct(product: any): Promise<any> {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
//   console.log("lib/api/products.ts createProduct response", response);
  if (!response.ok) {
    throw new Error('Failed to create product');
  }

  return response.json();
}

// Other CRUD functions can go here (e.g., fetchProducts, fetchProductById, updateProduct, deleteProduct)

export async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}

export async function fetchProductById(id: string) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
}

export async function updateProduct(id: string, product: any) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error('Failed to update product');
  }

  return response.json();
}

export async function deleteProduct(id: string) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete product');
  }

  return response.json();
}

