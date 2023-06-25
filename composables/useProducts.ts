import { useQuery } from '@tanstack/vue-query'
import { Product } from '../types/ProductsInterface';

const getProducts = async():Promise<Product[]> => {
  const { data } = await useFetch<Product[]>('https://apininas.vercel.app/api/products');
  return data;
}
const getProductById = async(íd: string): Promise<Product> => {
  const { data } = await useFetch<Product>(`https://apininas.vercel.app/api/products/${íd}`);
  return data;
}

export const useProducts = (id: string = '') => {
  const productsQuery = useQuery(
    { queryKey: ['products'], queryFn: getProducts }
  );
  const productQuery = useQuery(
    { queryKey: ['product', id], queryFn: () => getProductById(id) }
  );

  /*   const getProducts = async () => {
    try {
      products.value = data
    } catch (error) {

    }
  } */
  const search = ref('') 

  const product = ref<Product>(productQuery.data.value as Product)

  return { productsQuery, search, productQuery, product }
}
