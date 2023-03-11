import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../useDebounce';

function useSearchQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    () => searchParams.get('search') ?? ''
  );

  useEffect(() => {
    setSearchParams({ search: searchQuery });
    if (searchQuery === '') setSearchParams();
  }, [searchQuery]);

  const debouncedSearchQuery = useDebounce(searchQuery, 200);

  return { searchQuery, debouncedSearchQuery, setSearchQuery };
}

export default useSearchQueryParams;
