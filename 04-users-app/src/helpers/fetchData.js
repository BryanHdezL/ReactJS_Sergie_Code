// Obtener informacion de la API
export const fetchData = async (endPoint) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
    const data = await response.json();
    return {
      data: data,
      isLoading: false
    }
  } catch (error) {
    console.log(error);
  }
};