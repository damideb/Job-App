
import axios from 'axios'

export const AuthBase = axios.create({
  baseURL: import.meta.env.VITE_URL,
   headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
   }
});


AuthBase.interceptors.request.use((config)=>{
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
})

AuthBase.interceptors.response.use((response)=> response,
(error)=>{
    if (error.response && error.response.status === 401) {
        // clear access token on 401
        localStorage.removeItem("token");
        // navigate to login page
        window.location.href = "/login";
    
    }
    return Promise.reject(error);
  
})