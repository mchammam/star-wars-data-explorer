import { useInfiniteQuery, useQuery } from 'react-query';
import {
  APIResource,
  Film,
  filmSchema,
  ItemData,
  Person,
  personSchema,
  Planet,
  planetSchema,
  Specie,
  specieSchema,
  Starship,
  starshipSchema,
  Vehicle,
  vehicleSchema
} from './apiTypes';

const ONE_HOUR_MS = 1000 * 60 * 60;

export const apiQueryDefaultOptions = {
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  cacheTime: ONE_HOUR_MS * 2,
  staleTime: ONE_HOUR_MS
};

export function useFetchItemData({
  resource,
  id,
  initialData = undefined
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

          return jsonRes;
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

export function useFetchFilm({
  id,
  initialData = undefined
}: {
  id: string;
  initialData?: Film;
}) {
  const { isLoading, error, itemData } = useFetchItemData({
    resource: 'films',
    id,
    initialData
  });

  if (isLoading || error) return { isLoading, error };

  const safeParsedData = filmSchema.safeParse(itemData);

  if (!safeParsedData.success) return { error: Error('Data was not valid') };

  return {
    isLoading,
    error,
    film: safeParsedData.data
  };
}

export function useFetchPlanet({
  id,
  initialData = undefined
}: {
  id: string;
  initialData?: Planet;
}) {
  const { isLoading, error, itemData } = useFetchItemData({
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

export function useFetchSpecie({
  id,
  initialData = undefined
}: {
  id: string;
  initialData?: Specie;
}) {
  const { isLoading, error, itemData } = useFetchItemData({
    resource: 'species',
    id,
    initialData
  });

  if (isLoading || error) return { isLoading, error };

  const safeParsedData = specieSchema.safeParse(itemData);

  if (!safeParsedData.success) return { error: Error('Data was not valid') };

  return {
    isLoading,
    error,
    specie: safeParsedData.data
  };
}

export function useFetchPerson({
  id,
  initialData = undefined
}: {
  id: string;
  initialData?: Person;
}) {
  const { isLoading, error, itemData } = useFetchItemData({
    resource: 'people',
    id,
    initialData
  });

  if (isLoading || error) return { isLoading, error };

  const safeParsedData = personSchema.safeParse(itemData);

  console.log(safeParsedData.error);

  if (!safeParsedData.success) return { error: Error('Data was not valid') };

  return {
    isLoading,
    error,
    person: safeParsedData.data
  };
}

export function useFetchStarship({
  id,
  initialData = undefined
}: {
  id: string;
  initialData?: Starship;
}) {
  const { isLoading, error, itemData } = useFetchItemData({
    resource: 'starships',
    id,
    initialData
  });

  if (isLoading || error) return { isLoading, error };

  const safeParsedData = starshipSchema.safeParse(itemData);

  console.log(safeParsedData.error);

  if (!safeParsedData.success) return { error: Error('Data was not valid') };

  return {
    isLoading,
    error,
    starship: safeParsedData.data
  };
}

export function useFetchVehicle({
  id,
  initialData = undefined
}: {
  id: string;
  initialData?: Vehicle;
}) {
  const { isLoading, error, itemData } = useFetchItemData({
    resource: 'vehicles',
    id,
    initialData
  });

  if (isLoading || error) return { isLoading, error };

  const safeParsedData = vehicleSchema.safeParse(itemData);

  console.log(safeParsedData.error);

  if (!safeParsedData.success) return { error: Error('Data was not valid') };

  return {
    isLoading,
    error,
    vehicle: safeParsedData.data
  };
}

export function useFetchItemList({
  resource,
  searchQuery
}: {
  resource: APIResource;
  searchQuery: string | null;
}) {
  function getNextPageParamFromURL(url: string) {
    if (!url) return undefined;
    return url.split('page=')[1];
  }

  const {
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data
  } = useInfiniteQuery(
    ['list', resource, searchQuery],
    ({ pageParam = 1 }) =>
      fetch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/${resource}/?search=${searchQuery}&page=${pageParam}`
      ).then((res) => res.json()),
    {
      keepPreviousData: false,
      getNextPageParam: (lastPage) => getNextPageParamFromURL(lastPage.next)
    }
  );

  console.log(['list', resource, searchQuery], 'cache key');

  const totalItems = data?.pages[0].count;

  const items = data?.pages.map((page) => page.results).flat();

  const currentPageParam = data?.pageParams.at(-1) as number | undefined;
  const currentPageNumber = currentPageParam ? currentPageParam : 1;

  return {
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    items,
    totalItems,
    currentPageNumber
  };
}
