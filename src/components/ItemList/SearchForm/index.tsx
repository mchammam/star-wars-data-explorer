import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';

type SetURLSearchParams = ReturnType<typeof useSearchParams>[1];

function SearchForm({
  searchParams,
  setSearchParams,
}: {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}) {
  const searchQuery = searchParams.get('search')
    ? searchParams.get('search')
    : '';

  function handleSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchParams({ search: e.target.value });
    if (e.target.value === '') setSearchParams();
  }

  return (
    <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchInput" className="visually-hidden">
        Search query
      </label>
      <input
        className={styles.searchInput}
        id="searchInput"
        placeholder="Search.."
        type="text"
        value={searchQuery ? searchQuery : ''}
        onChange={(e) => handleSearchInputChange(e)}
      />
    </form>
  );
}

export default SearchForm;
