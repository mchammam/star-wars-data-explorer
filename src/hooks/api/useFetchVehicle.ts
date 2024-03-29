import { Vehicle, vehicleSchema } from '../../services/apiTypes';
import { useFetchItem } from './useFetchItem';

export function useFetchVehicle({
  id,
  initialData
}: {
  id: string;
  initialData?: Vehicle;
}) {
  const { isLoading, error, itemData } = useFetchItem({
    resource: 'vehicles',
    id,
    initialData
  });

  if (itemData === undefined) return { isLoading, error, itemData };
  const safeParsedData = vehicleSchema.safeParse(itemData);

  if (!safeParsedData.success) return { error: Error('Data was not valid') };

  return {
    isLoading,
    error,
    vehicle: safeParsedData.data
  };
}
