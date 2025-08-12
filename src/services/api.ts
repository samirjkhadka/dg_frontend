import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

// Environment-based API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001/api';

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add any request modifications here (e.g., auth tokens)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle common errors
    const status = error.response?.status;
    if (status === 401) {
      // Handle unauthorized
      console.error('Unauthorized access');
    } else if (status === 404) {
      // Handle not found
      console.error('Resource not found');
    } else if (status && status >= 500) {
      // Handle server errors
      console.error('Server error occurred');
    }
    
    return Promise.reject(error);
  }
);

// API response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

// Generic API methods
export const api = {
  get: <T>(url: string, params?: any): Promise<ApiResponse<T>> =>
    apiClient.get(url, { params }).then(response => response.data),
  
  post: <T>(url: string, data?: any): Promise<ApiResponse<T>> =>
    apiClient.post(url, data).then(response => response.data),
  
  put: <T>(url: string, data?: any): Promise<ApiResponse<T>> =>
    apiClient.put(url, data).then(response => response.data),
  
  delete: <T>(url: string): Promise<ApiResponse<T>> =>
    apiClient.delete(url).then(response => response.data),
  
  patch: <T>(url: string, data?: any): Promise<ApiResponse<T>> =>
    apiClient.patch(url, data).then(response => response.data),
};

export default apiClient; 