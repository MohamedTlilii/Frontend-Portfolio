import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState({}); // Initialize data state with an empty object
  const [error, setError] = useState({}); // Initialize error state with an empty object
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.data); // Update data state with the received data
        setLoading(false); // Set loading to false after successful data fetch
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setError("404 NOT FOUND"); // Update error state with the error message
          console.dir(err);
        }
        setLoading(false); // Set loading to false after error occurs
      });
  }, [data,url]); // Dependency array with only 'url'

  return { data,error, loading }; // Return data, error, and loading states
};
