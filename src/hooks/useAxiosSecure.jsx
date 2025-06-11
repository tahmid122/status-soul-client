import React, { useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const { user } = useAuth;
  useEffect(() => {
    if (!user) return;
    axiosInstance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    });
  }, [user]);
  return axiosInstance;
};

export default useAxiosSecure;
