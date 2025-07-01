/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { toast } from "react-toastify";
import * as T from "@/common/types";
import { Method } from "../enums";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-cache",
  },
});

// Add CSRF protection for Django
apiClient.defaults.xsrfCookieName = "csrftoken";
apiClient.defaults.xsrfHeaderName = "X-CSRFToken";

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Successfully received response (status 2xx)
    // Extract standardized data format
    const { data, status } = response;

    // Handle successful informative responses (e.g. with messages)
    if (data.success && data.result?.message && status !== 200) {
      toast.success(data.result.message);
    }
    // Return either result or entire response based on your needs
    return data;
  },
  (error) => {
    if (error.response) {
      const { data, status } = error.response;

      // Field validation errors (status 400 with field-specific errors)
      if (status === 400 && data.error_messages) {
        const errors = data.error_messages;

        // Handle non-field errors (general validation errors)
        if (errors.non_field_errors || errors.message) {
          toast.error(errors.non_field_errors || errors.message);
          return Promise.reject({
            type: "validation_error",
            message: errors.non_field_errors,
            errors: { general: errors.non_field_errors },
          });
        }

        // Handle field-specific errors
        const fieldErrors = {};

        return Promise.reject({
          type: "field_errors",
          message: "",
          errors: fieldErrors,
        });
      }

      if (status === 403 && data.error_messages) {
        const errors = data.error_messages;

        // Handle non-field errors (general validation errors)
        if (errors.non_field_errors || errors.message) {
          toast.error(errors.non_field_errors || errors.message);
          return Promise.reject({
            ...errors,
            type: "validation_error",
            message: errors.non_field_errors,
            errors: { general: errors.non_field_errors },
            ...error.response,
          });
        }
      }

      // Not found errors (status 404)
      if (status === 404) {
        const message = data.error_messages?.non_field_errors || "";
        if (message) toast.error(message);
        return Promise.reject({
          type: "not_found",
          message,
        });
      }

      if (status === 402) {
        const message = data.error_messages?.error || "";
        toast.error(message);
        return Promise.reject({
          type: "402",
          message,
        });
      }

      // Not found errors (status 404)
      if (status === 401) {
        const message = "دوباره وارد شوید";
        toast.error(message);
        window.location.href = "/login";
        window.localStorage.removeItem("access_token");
        window.localStorage.removeItem("refresh_token");
        return Promise.reject({
          type: "not_found",
          message,
        });
      }

      // Server errors (status 500 etc.)
      if (status >= 500) {
        toast.error("Server error. Please try again later.");
        return Promise.reject({
          type: "server_error",
          message: "Server error. Please try again later.",
        });
      }

      // Other HTTP errors
      toast.error("An error occurred");
      return Promise.reject({
        type: "http_error",
        status,
        message: data.error_messages?.non_field_errors || "An error occurred",
      });
    }

    // Network errors (no response at all)
    if (error.request) {
      toast.error("Network error. Please check your connection.");
      return Promise.reject({
        type: "network_error",
        message: "Network error. Please check your connection.",
      });
    }

    // Other errors
    toast.error("Something went wrong");
    return Promise.reject({
      type: "unknown_error",
      message: error.message || "Something went wrong",
    });
  }
);

// Request interceptor (for authentication)
apiClient.interceptors.request.use(
  (config) => {
    // Get token from storage
    const token = localStorage.getItem("access_token");

    // Add token to header if exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const clientFetcher = ({ endpoint, method = Method.GET, data = null, config = {} }: T.ClientFetcherArgs) => {
  const params = {
    method,
    url: endpoint,
    ...config,
  };

  return apiClient({ ...params, data });
};

export default {
  get: ({ endpoint, config }: T.ClientFetcherArgs) => clientFetcher({ endpoint, method: Method.GET, config }),
  post: ({ endpoint, config, data }: T.ClientFetcherArgs) =>
    clientFetcher({ endpoint, method: Method.POST, config, data }),
  put: ({ endpoint, config, data }: T.ClientFetcherArgs) =>
    clientFetcher({ endpoint, method: Method.PUT, config, data }),
  delete: ({ endpoint, config, data }: T.ClientFetcherArgs) =>
    clientFetcher({ endpoint, method: Method.DELETE, config, data }),
  patch: ({ endpoint, config, data }: T.ClientFetcherArgs) =>
    clientFetcher({ endpoint, method: Method.PATCH, config, data }),
};
