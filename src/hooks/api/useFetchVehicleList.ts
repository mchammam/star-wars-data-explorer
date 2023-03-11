import { vehicleSchema } from '../../services/apiTypes';
import { useFetchItemList } from './useFetchItemList';

export function useFetchVehicleList({ searchQuery }: { searchQuery: string }) {
  const fetchData = useFetchItemList({ resource: 'vehicles', searchQuery });

  if (fetchData.items === undefined)
    return {
      ...fetchData,
      items: undefined
    };

  const safeParsedData = vehicleSchema.array().safeParse(fetchData.items);

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
