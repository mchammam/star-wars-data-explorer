import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../useDebounce';

function useSearchQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    () => searchParams.get('search') ?? ''
  );

  useEffect(() => {
    if (searchQuery === '') {
      setSearchParams();
      return;
    }
    setSearchParams({ search: searchQuery });
  }, [searchQuery]);

  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  return { searchQuery, debouncedSearchQuery, setSearchQuery };
}

export default useSearchQueryParams;
