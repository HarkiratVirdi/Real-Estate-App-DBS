import { useEffect, useState } from 'react';
import { baseRoute } from '../utils';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(baseRoute + endpoint)
      .then((res) => {
        console.log('data', endpoint, res);
        setData(res.data);
      })
      .catch((err) => {
        console.log('error', endpoint, err);
        setError(err);
      });
  }, []);

  return { data, error };
};

export default useFetch;
