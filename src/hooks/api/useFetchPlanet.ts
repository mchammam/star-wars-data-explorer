import { Planet, planetSchema } from '../../services/apiTypes';
import { useFetchItem } from './useFetchItem';

export function useFetchPlanet({
  id,
  initialData
}: {
  id: string;
  initialData?: Planet;
}) {
  const { isLoading, error, itemData } = useFetchItem({
    resource: 'planets',
    id,
    initialData
  });

  if (isLoading || error) return { isLoading, error };

  const safeParsedData = planetSchema.safeParse(itemData);

  if (!safeParsedData.success) return { error: Error('Data was not valid') };

  return {
    isLoading,
    error,
    planet: safeParsedData.data
  };
}
