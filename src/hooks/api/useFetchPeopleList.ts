import { personSchema } from '../../services/apiTypes';
import { useFetchItemList } from './useFetchItemList';

export function useFetchPeopleList({ searchQuery }: { searchQuery: string }) {
  const fetchData = useFetchItemList({ resource: 'people', searchQuery });

  if (fetchData.items === undefined)
    return {
      ...fetchData,
      items: undefined
    };

  const safeParsedData = personSchema.array().safeParse(fetchData.items);

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
