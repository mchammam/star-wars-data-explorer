import styles from './styles.module.css';

function StatusText({
  totalItems,
  renderedItemsCount,
  searchQuery
}: {
  totalItems: number | undefined;
  renderedItemsCount: number;
  searchQuery: string | null;
}) {
  const isLoading = typeof totalItems == 'undefined';

  return (
    <div className={styles.statusText}>
      {searchQuery
        ? isLoading
          ? `Searching "${searchQuery}"...`
          : (totalItems || 0) > 0
          ? `Showing ${renderedItemsCount} search results of ${totalItems}`
          : 'No search results'
        : isLoading
        ? 'Loading data..'
        : `Showing ${renderedItemsCount} items of ${totalItems}`}
    </div>
  );
}

export default StatusText;
