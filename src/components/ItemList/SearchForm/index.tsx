import { ChangeEvent } from 'react';
import styles from './styles.module.css';

function SearchForm({
  searchParams,
  setSearchParams
}: {
  searchParams: URLSearchParams;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSearchParams: any;
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
      <label></label>
      <input
        className={styles.searchInput}
        placeholder="Search.."
        type="text"
        value={searchQuery ? searchQuery : ''}
        onChange={(e) => handleSearchInputChange(e)}
      />
    </form>
  );
}

export default SearchForm;
