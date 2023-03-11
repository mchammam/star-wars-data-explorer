import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

function Pagination({
  fetchNextPage,
  isFetchingNextPage,
  isLoading,
  hasNextPage,
  totalItems,
  renderedItemsCount,
  currentPageNumber,
}: {
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  hasNextPage?: boolean;
  totalItems: number;
  renderedItemsCount: number;
  currentPageNumber: number;
}) {
  const paginationRef = useRef(null);
  const isFetchingNextPageRef = useRef<boolean>(false);
  isFetchingNextPageRef.current = isFetchingNextPage;

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.75,
    });

    paginationRef.current && observer.observe(paginationRef.current);

    return () => observer.disconnect();
  }, []);

  function handleIntersection(entries: IntersectionObserverEntry[]) {
    if (!isFetchingNextPageRef.current && entries[0].isIntersecting) {
      fetchNextPage();
    }
  }

  return (
    <div ref={paginationRef} className={styles.pagination}>
      {isFetchingNextPage ? (
        'Loading...'
      ) : hasNextPage ? (
        <>
          There are {totalItems - renderedItemsCount} more items.
          <button className="btn" onClick={() => fetchNextPage()}>
            Show more
          </button>
        </>
      ) : (
        !isLoading && currentPageNumber > 1 && <>No more items.</>
      )}
    </div>
  );
}

export default Pagination;
