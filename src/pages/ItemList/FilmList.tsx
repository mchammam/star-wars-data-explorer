import { useFetchFilmList } from '../../hooks/api/useFetchFilmList';
import ListItemSkeleton from '../../components/ListItems/ListItemSkeleton';
import Pagination from '../../components/ItemList/pagination';
import SearchForm from '../../components/ItemList/SearchForm';
import StatusText from '../../components/ItemList/StatusText';
import ItemListPage from '../../components/ItemList/ItemListPage';
import ItemListErrorPage from '../../components/ItemList/ItemListErrorPage';
import FilmListItem from '../../components/ListItems/FilmListItem';
import useSearchQueryParams from '../../hooks/itemList/useSearchQueryParams';

const LOADING_SKELETON_COUNT = 5;

function FilmList() {
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
  } = useFetchFilmList({ searchQuery: debouncedSearchQuery });

  if (error instanceof Error) return <ItemListErrorPage error={error} />;

  const renderedItemsCount = items?.length ?? 0;

  return (
    <ItemListPage
      header={'Browse by films'}
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
        {items?.map((film) => (
          <FilmListItem key={film.url} film={film} />
        ))}

        {(isLoading || isFetchingNextPage) && (
          <ListItemSkeleton count={LOADING_SKELETON_COUNT} />
        )}
      </>
    </ItemListPage>
  );
}

export default FilmList;
