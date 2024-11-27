// lib/apiClient.ts
export const apiClient = {
    async get(url: string) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`GET ${url} failed with status ${response.status}`);
      }
      return response.json();
    },
  
    async post(url: string, data: any) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`POST ${url} failed with status ${response.status}`);
      }
      return response.json();
    },
  
    async put(url: string, data: any) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`PUT ${url} failed with status ${response.status}`);
      }
      return response.json();
    },
  
    async delete(url: string) {
      const response = await fetch(url, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`DELETE ${url} failed with status ${response.status}`);
      }
      return response.json();
    },
  };
  