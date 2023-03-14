import { Film, filmSchema } from '../../services/apiTypes';
import { useFetchItem } from './useFetchItem';

export function useFetchFilm({
  id,
  initialData
}: {
  id: string;
  initialData?: Film;
}) {
  const { isLoading, error, itemData } = useFetchItem({
    resource: 'films',
    id,
    initialData
  });

  if (itemData === undefined) return { isLoading, error, itemData };
  const safeParsedData = filmSchema.safeParse(itemData);

  if (!safeParsedData.success) return { error: Error('Data was not valid') };

  return {
    isLoading,
    error,
    film: safeParsedData.data
  };
}
