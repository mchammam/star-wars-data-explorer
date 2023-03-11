import { useInfiniteQuery } from 'react-query';
import { APIResource } from '../../services/apiTypes';

export function useFetchItemList({
  resource,
  searchQuery
}: {
  resource: APIResource;
  searchQuery?: string;
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
      ).then(async (res) => {
        const jsonRes = await res.json();

        return jsonRes;
      }),
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
