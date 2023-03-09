import { useSearchParams } from 'react-router-dom';
import { useFetchItemList } from '../../services/api';
import ListItem from '../../components/ListItem';
import ListItemSkeleton from '../../components/ListItemSkeleton';
import Page from '../../components/Page';
import Pagination from '../../components/ItemList/pagination';
import SearchForm from '../../components/ItemList/SearchForm';
import styles from './styles.module.css';
import { APIResource } from '../../services/apiTypes';
import StatusText from '../../components/ItemList/StatusText';
import { useDebounce } from '../../hooks/useDebounce';

const LOADING_SKELETON_COUNT = 5;

function ItemList({ resource }: { resource: APIResource }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('search') ?? '';
  const debouncedSearchQuery = useDebounce(searchQuery, 200);

  const {
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    items,
    totalItems,
    currentPageNumber,
  } = useFetchItemList({ resource, searchQuery: debouncedSearchQuery });

  const renderedItemsCount = items?.length ? items?.length : 0;

  return (
    <Page header={`Browse by ${resource}`}>
      <SearchForm
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <StatusText
        totalItems={totalItems}
        renderedItemsCount={renderedItemsCount}
        searchQuery={searchQuery}
      />

      <ul className={styles.itemList}>
        <>
          {error && `Error: ${error}`}

          {items?.map((itemData) => (
            <ListItem
              key={itemData.url}
              resource={resource}
              itemData={itemData}
            />
          ))}

          {(isLoading || isFetchingNextPage) && (
            <ListItemSkeleton count={LOADING_SKELETON_COUNT} />
          )}
        </>
      </ul>

      <Pagination
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        totalItems={totalItems}
        currentPageNumber={currentPageNumber}
        renderedItemsCount={renderedItemsCount}
      />
    </Page>
  );
}

export default ItemList;
