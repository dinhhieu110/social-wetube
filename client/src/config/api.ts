const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
  _retry?: boolean;
}
type FetchMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const api = async (
  url: string,
  method: FetchMethod = 'GET',
  optionBody?: any,
  options: FetchOptions = {},
): Promise<any> => {
  // Config headers
  const token = localStorage.getItem('token');
  const headers: Record<string, string> = {
    'Content-Type': options.headers?.['Content-Type'] || 'application/json',
    ...options.headers,
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Stringify body
  const body = optionBody && typeof optionBody === 'object' ? JSON.stringify(optionBody) : optionBody;

  const config: FetchOptions = {
    ...options,
    method,
    body,
    headers,
    credentials: 'include',
  };

  const response = await fetch(`${BASE_URL}${url}`, config);

  if (!response.ok) {
    // Access Token was expired
    if (response.status === 401 && !config._retry) {
      config._retry = true;
      try {
        const refreshResponse = await fetch(`${BASE_URL}/auth/refresh-token`, {
          method: 'POST',
        });

        if (!refreshResponse.ok) {
          throw new Error('Failed to refresh token');
        }

        const refreshData = await refreshResponse.json();
        localStorage.setItem('token', refreshData.token);

        return api(url, method, config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(response);
  }

  return response.json();
};

export default api;
