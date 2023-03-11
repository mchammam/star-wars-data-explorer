import { planetSchema } from '../../services/apiTypes';
import { useFetchItemList } from './useFetchItemList';

export function useFetchPlanetList({ searchQuery }: { searchQuery: string }) {
  const fetchData = useFetchItemList({ resource: 'planets', searchQuery });

  if (fetchData.items === undefined)
    return {
      ...fetchData,
      items: undefined
    };

  const safeParsedData = planetSchema.array().safeParse(fetchData.items);

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
