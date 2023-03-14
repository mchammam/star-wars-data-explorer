import { Person, personSchema } from '../../services/apiTypes';
import { useFetchItem } from './useFetchItem';

export function useFetchPerson({
  id,
  initialData
}: {
  id: string;
  initialData?: Person;
}) {
  const { isLoading, error, itemData } = useFetchItem({
    resource: 'people',
    id,
    initialData
  });

  if (itemData === undefined) return { isLoading, error, itemData };

  const safeParsedData = personSchema.safeParse(itemData);

  if (!safeParsedData.success) return { error: Error('Data was not valid') };

  return {
    isLoading,
    error,
    person: safeParsedData.data
  };
}
