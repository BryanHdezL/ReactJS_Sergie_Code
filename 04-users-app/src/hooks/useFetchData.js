// React
import { useEffect, useState } from 'react';

// Helpers
import { fetchData } from '../helpers/fetchData';

// Custom Hook
export const useFetchData = (endPoint) => {
  // Hooks
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getData = async () => {
    const { data, isLoading } = await fetchData(endPoint)
    setData(data)
    setIsLoading(isLoading)
  }

  // Hook al recibir un efecto (accionar boton)
  useEffect(() => { getData() }, [endPoint]);

  return {
    data,
    isLoading
  }
}
