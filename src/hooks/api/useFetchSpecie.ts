import { Specie, specieSchema } from '../../services/apiTypes';
import { useFetchItem } from './useFetchItem';

export function useFetchSpecie({
  id,
  initialData
}: {
  id: string;
  initialData?: Specie;
}) {
  const { isLoading, error, itemData } = useFetchItem({
    resource: 'species',
    id,
    initialData
  });

  if (itemData === undefined) return { isLoading, error, itemData };
  const safeParsedData = specieSchema.safeParse(itemData);

  if (!safeParsedData.success) return { error: Error('Data was not valid') };

  return {
    isLoading,
    error,
    specie: safeParsedData.data
  };
}
