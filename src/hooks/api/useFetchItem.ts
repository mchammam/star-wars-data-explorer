import { useQuery } from 'react-query';
import { APIResource, ItemData, itemDataSchema } from '../../services/apiTypes';

export function useFetchItem({
  resource,
  id,
  initialData
}: {
  resource: APIResource;
  id: string;
  initialData?: ItemData;
}) {
  const doFetchData = initialData ? false : true;

  const { isLoading, error, data } = useQuery(
    [resource, id],
    () =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/${resource}/${id}`).then(
        async (res) => {
          if (res.status === 404) throw new Error('Resource not found');

          const jsonRes = await res.json();

          const safeParsedData = itemDataSchema.safeParse(jsonRes);

          if (!safeParsedData.success) throw new Error('Data was not valid');

          return safeParsedData.data;
        }
      ),
    {
      enabled: doFetchData,
      initialData: initialData
    }
  );

  return {
    isLoading,
    error,
    itemData: data
  };
}
