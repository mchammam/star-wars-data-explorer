import styles from './styles.module.css';

function SearchForm({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
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
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
