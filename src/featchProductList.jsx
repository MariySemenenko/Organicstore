

import { useQuery } from 'react-query';
import axios from 'axios';
import { Loader } from 'loader/Loader';

export async function getImages(query, page) {
    const BASE_URL = `https://pixabay.com/api/`;
  
    const API_KEY = '35692363-708937b69116888a5fb6ef1bd';
  
    const options = `image_type=photo&orientation=horizontal&per_page=12`;
  
    try {
      const { data } = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${query}&${options}&page=${page}`
      );
  
      return data;
    } catch (error) {
     console.log(error);
    }
  }


export const ProductList = () => {
  const { data, isLoading, error } = useQuery('products', getImages);

  if (isLoading) {
    return <div><Loader /></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

