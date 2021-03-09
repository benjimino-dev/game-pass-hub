import { useState, useEffect } from 'react';
import axios from '../axios-gamepasshub-instance';
// Description
// Custom hook that returns typical state to handle loading, errors and responses from api requests.
const useAxios = (url, options) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    axios
      .get(url, options)
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, [url, options]);

  return [response, isLoading, hasError];
};

export default useAxios;
