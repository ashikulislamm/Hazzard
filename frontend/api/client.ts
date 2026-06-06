import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor for JWT authentication
apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("hazzard_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Global response handling
apiClient.interceptors.response.use(
  (response) => {
    // If response is nested or raw, we return the data
    return response.data;
  },
  (error) => {
    // Normalize server error formats
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "An unexpected error occurred.";

    if (error.response?.status === 401 && typeof window !== "undefined") {
      // Automatic logout or redirect to login on unauthorized
      localStorage.removeItem("hazzard_token");
      localStorage.removeItem("hazzard_user");
    }

    return Promise.reject(new Error(message));
  }
);
