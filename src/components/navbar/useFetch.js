import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
 async function fetchData(){
     try {
      const response = await axios.get(url);
      response && setResult(response.data)
        } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
   fetchData();
   
  }, [url]);
 
  return { result, loading, error };
}
