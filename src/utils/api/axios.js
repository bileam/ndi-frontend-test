// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://103.185.52.135:1000",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   timeout: 10000,
// });

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // handle error global
//     return Promise.reject(
//       error.response?.data || { message: "Terjadi kesalahan server" }
//     );
//   }
// );

// export default api;

const BASE_URL = "http://103.185.52.135:1000";

const request = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    // handle error global (mirip interceptor axios)
    if (!response.ok) {
      throw data || { message: "Terjadi kesalahan server" };
    }

    return data;
  } catch (error) {
    return Promise.reject(
      error?.message ? error : { message: "Network error" }
    );
  }
};

export default request;
