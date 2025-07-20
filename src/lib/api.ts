// API configuration and utility functions
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Submission {
  id?: string;
  teamLeaderEmail: string;
  teamLeaderName: string;
  teamName: string;
  demoUrl: string;
  githubUrl: string;
  driveLink: string;
  status?: 'pending' | 'under_review' | 'approved' | 'rejected';
  createdAt?: string;
  updatedAt?: string;
}

export interface AdminLoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  data?: {
    accessToken: string;
    refreshToken: string;
    user: {
      id: string;
      email: string;
      name: string;
    };
  };
  message?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Generic API call function
async function apiCall<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API call failed');
    }

    return {
      success: true,
      data: data.data || data,
      message: data.message,
    };
  } catch (error) {
    console.error('API call error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

// Submission API calls
export const submissionApi = {
  // Create new submission (public)
  create: async (submission: Omit<Submission, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Submission>> => {
    return apiCall<Submission>('/api/v1/submissions', {
      method: 'POST',
      body: JSON.stringify(submission),
    });
  },

  // Get all submissions (admin only)
  getAll: async (): Promise<ApiResponse<Submission[]>> => {
    return apiCall<Submission[]>('/api/v1/submissions');
  },

  // Get submission by ID (admin only)
  getById: async (id: string): Promise<ApiResponse<Submission>> => {
    return apiCall<Submission>(`/api/v1/submissions/${id}`);
  },

  // Update submission (admin only)
  update: async (id: string, updates: Partial<Submission>): Promise<ApiResponse<Submission>> => {
    return apiCall<Submission>(`/api/v1/submissions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  },

  // Update submission status (admin only)
  updateStatus: async (id: string, status: Submission['status']): Promise<ApiResponse<Submission>> => {
    return apiCall<Submission>(`/api/v1/submissions/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  },

  // Delete submission (admin only)
  delete: async (id: string): Promise<ApiResponse<void>> => {
    return apiCall<void>(`/api/v1/submissions/${id}`, {
      method: 'DELETE',
    });
  },
};

// Authentication API calls
export const authApi = {
  // Admin login
  login: async (credentials: AdminLoginData): Promise<AuthResponse> => {
    try {
      const response = await apiCall<AuthResponse['data']>('/api/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      if (response.success && response.data) {
        // Store tokens in localStorage
        localStorage.setItem('adminToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        
        return {
          success: true,
          data: response.data,
        };
      }

      return {
        success: false,
        message: response.error || 'Login failed',
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Login failed',
      };
    }
  },

  // Admin logout
  logout: async (): Promise<ApiResponse<void>> => {
    const result = await apiCall<void>('/api/v1/auth/logout', {
      method: 'POST',
    });

    // Clear tokens from localStorage regardless of API response
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('refreshToken');
    }

    return result;
  },

  // Refresh token
  refresh: async (): Promise<AuthResponse> => {
    try {
      const refreshToken = typeof window !== 'undefined' ? localStorage.getItem('refreshToken') : null;
      
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await apiCall<AuthResponse['data']>('/api/v1/auth/refresh', {
        method: 'POST',
        body: JSON.stringify({ refreshToken }),
      });

      if (response.success && response.data) {
        // Update tokens in localStorage
        localStorage.setItem('adminToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        
        return {
          success: true,
          data: response.data,
        };
      }

      return {
        success: false,
        message: response.error || 'Token refresh failed',
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Token refresh failed',
      };
    }
  },

  // Get admin profile
  getProfile: async (): Promise<ApiResponse<any>> => {
    return apiCall('/api/v1/auth/profile');
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('adminToken');
  },
};

// Health check API
export const healthApi = {
  ping: async (): Promise<ApiResponse<{ message: string }>> => {
    return apiCall<{ message: string }>('/ping');
  },

  health: async (): Promise<ApiResponse<any>> => {
    return apiCall('/api/v1/health');
  },

  detailedHealth: async (): Promise<ApiResponse<any>> => {
    return apiCall('/api/v1/health/detailed');
  },

  dbHealth: async (): Promise<ApiResponse<any>> => {
    return apiCall('/api/v1/health/db');
  },
};

// Audit API calls (admin only)
export const auditApi = {
  getAll: async (): Promise<ApiResponse<any[]>> => {
    return apiCall<any[]>('/api/v1/audit');
  },

  getSubmissionLogs: async (submissionId: string): Promise<ApiResponse<any[]>> => {
    return apiCall<any[]>(`/api/v1/audit/submission/${submissionId}`);
  },

  getAdminLogs: async (adminId: string): Promise<ApiResponse<any[]>> => {
    return apiCall<any[]>(`/api/v1/audit/admin/${adminId}`);
  },

  getStats: async (): Promise<ApiResponse<any>> => {
    return apiCall('/api/v1/audit/stats');
  },
};

export default {
  submission: submissionApi,
  auth: authApi,
  health: healthApi,
  audit: auditApi,
};
