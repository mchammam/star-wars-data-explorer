import { Starship, starshipSchema } from '../../services/apiTypes';
import { useFetchItem } from './useFetchItem';

export function useFetchStarship({
  id,
  initialData
}: {
  id: string;
  initialData?: Starship;
}) {
  const { isLoading, error, itemData } = useFetchItem({
    resource: 'starships',
    id,
    initialData
  });

  if (itemData === undefined) return { isLoading, error, itemData };
  const safeParsedData = starshipSchema.safeParse(itemData);

  if (!safeParsedData.success) return { error: Error('Data was not valid') };

  return {
    isLoading,
    error,
    starship: safeParsedData.data
  };
}
