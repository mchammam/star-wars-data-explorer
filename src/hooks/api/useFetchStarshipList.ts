import { starshipSchema } from '../../services/apiTypes';
import { useFetchItemList } from './useFetchItemList';

export function useFetchStarshipList({ searchQuery }: { searchQuery: string }) {
  const fetchData = useFetchItemList({ resource: 'starships', searchQuery });

  if (fetchData.items === undefined)
    return {
      ...fetchData,
      items: undefined
    };

  const safeParsedData = starshipSchema.array().safeParse(fetchData.items);

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
