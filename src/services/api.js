// API Service Layer
const API_BASE_URL = 'https://dummyjson.com';

export const api = {
  async getProducts(limit = 6) {
    try {
      const response = await fetch(`${API_BASE_URL}/products?limit=${limit}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },


  async getProductById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }
};