import { useInfiniteQuery, useQuery } from 'react-query';
import { APIResource } from './apiTypes';

const ONE_HOUR_MS = 1000 * 60 * 60;

export const apiQueryDefaultOptions = {
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  cacheTime: ONE_HOUR_MS * 2,
  staleTime: ONE_HOUR_MS
};

export function fetchItemData({
  resource,
  id,
  initialData = undefined
}: {
  resource: APIResource;
  id: string;
  initialData?: object;
}) {
  const doFetchData = initialData ? false : true;

  const { isLoading, error, data } = useQuery(
    [`${resource}`, id],
    () =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/${resource}/${id}`).then(
        (res) => res.json()
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

export function fetchItemList({
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
    [`${resource}-List`, searchQuery],
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

  const totalItems = data?.pages[0].count;

  const items = data?.pages.map((page) => page.results).flat();

  return {
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    items,
    totalItems
  };
}
