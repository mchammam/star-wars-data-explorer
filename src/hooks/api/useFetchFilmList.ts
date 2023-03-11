import { filmSchema } from '../../services/apiTypes';
import { useFetchItemList } from './useFetchItemList';

export function useFetchFilmList({ searchQuery }: { searchQuery: string }) {
  const fetchData = useFetchItemList({ resource: 'films', searchQuery });

  if (fetchData.items === undefined)
    return {
      ...fetchData,
      items: undefined
    };

  const safeParsedData = filmSchema.array().safeParse(fetchData.items);

  if (!safeParsedData.success)
    return {
      ...fetchData,
      items: undefined,
      error: Error('Data was not valid')
    };

  return {
    ...fetchData,
    items: safeParsedData.data
  };
}
