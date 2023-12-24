import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VUE_APP_API_URL, // Use VUE_APP_ prefix for environment variables in Vue
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(async function (config) {
    console.log(import.meta.env)
  const session = 123;
  if (session) {
    config.headers['Authorization'] = 'Bearer ' + session?.user?.access_token;
  }
  if (typeof config.form_data !== 'undefined') {
    config.headers['Content-Type'] = 'multipart/form-data';
  }

  // Set loading when calling API, only in the client
  if (typeof config.loading !== 'undefined' && typeof window !== 'undefined') {
    try {
      // You need to handle loading according to your Vue application's logic
      // You may use a state management library or another approach
      // For simplicity, I'm logging a message here
      console.log('Start loading');
    } catch (e) {
      console.error('Start loading:', e);
    }
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

api.interceptors.response.use(
  (res) => {
    // Remove loading when calling API, only in the client
    if (typeof res.config.loading !== 'undefined' && typeof window !== 'undefined') {
      try {
        // You need to handle loading removal according to your Vue application's logic
        // For simplicity, I'm logging a message here
        console.log('End loading');
      } catch (e) {
        console.error('End loading:', e);
      }
    }
    if (typeof res.config.response_beauty !== 'undefined') {
      return res.data;
    }
    return res;
  },
  (error) => {
    if (typeof window !== 'undefined') {
      // You need to handle error removal according to your Vue application's logic
      // For simplicity, I'm logging a message here
      console.error('Error:', error);
    }
    return Promise.reject(error);
  }
);

export default api;
