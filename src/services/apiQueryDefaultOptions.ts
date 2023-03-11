const ONE_HOUR_MS = 1000 * 60 * 60;

export const apiQueryDefaultOptions = {
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  cacheTime: ONE_HOUR_MS * 2,
  staleTime: ONE_HOUR_MS
};
