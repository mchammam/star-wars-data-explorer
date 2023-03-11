import { useFetchPlanetList } from '../../hooks/api/useFetchPlanetList';
import ListItemSkeleton from '../../components/ListItems/ListItemSkeleton';
import Pagination from '../../components/ItemList/pagination';
import SearchForm from '../../components/ItemList/SearchForm';
import StatusText from '../../components/ItemList/StatusText';
import ItemListPage from '../../components/ItemList/ItemListPage';
import ItemListErrorPage from '../../components/ItemList/ItemListErrorPage';
import useSearchQueryParams from '../../hooks/itemList/useSearchQueryParams';
import PlanetListItem from '../../components/ListItems/PlanetListItem';

const LOADING_SKELETON_COUNT = 5;

function PlanetList() {
  const { searchQuery, debouncedSearchQuery, setSearchQuery } =
    useSearchQueryParams();

  const {
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    items,
    totalItems,
    currentPageNumber,
  } = useFetchPlanetList({ searchQuery: debouncedSearchQuery });

  if (error instanceof Error) return <ItemListErrorPage error={error} />;

  const renderedItemsCount = items?.length ?? 0;

  return (
    <ItemListPage
      header={'Browse by planets'}
      searchForm={
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      }
      statusText={
        <StatusText
          totalItems={totalItems}
          renderedItemsCount={renderedItemsCount}
          searchQuery={searchQuery}
        />
      }
      pagination={
        <Pagination
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          isLoading={isLoading}
          totalItems={totalItems}
          currentPageNumber={currentPageNumber}
          renderedItemsCount={renderedItemsCount}
        />
      }
    >
      <>
        {items?.map((planet) => (
          <PlanetListItem key={planet.url} planet={planet} />
        ))}

        {(isLoading || isFetchingNextPage) && (
          <ListItemSkeleton count={LOADING_SKELETON_COUNT} />
        )}
      </>
    </ItemListPage>
  );
}

export default PlanetList;
