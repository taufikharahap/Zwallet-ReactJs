import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function useApi(urls = "") {
  const { token } = useSelector((s) => s.users);

  const [requests, setRequests] = useState({
    baseURL: import.meta.env.VITE_APP_BASEURL || urls,
    // baseURL: import.meta.env.VITE_APP_BASEURL || urls,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    setRequests({
      ...requests,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return axios.create(requests); // yang dipakai ini
}

export default useApi;
