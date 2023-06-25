import { useQuery } from '@tanstack/vue-query'
import { Category } from '../types/ProductsInterface';

const getCategories= async():Promise<Category[]> => {
  const { data } = await useFetch<Category[]>('https://apininas.vercel.app/api/categories');
  return data;
}

export const useCategories = () => {
  const categoriesQuery = useQuery(
    { queryKey: ['categories'], queryFn: getCategories }
  );

  const categoriesSelected = computed( () => {
    const cat = categoriesQuery.data.value?.map( e => {
      return e.name
    })
    cat?.unshift('All')
    return cat
  } )

  return { categoriesQuery, categoriesSelected }
}
