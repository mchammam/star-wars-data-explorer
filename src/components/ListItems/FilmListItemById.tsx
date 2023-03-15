import { useFetchFilm } from '../../hooks/api/useFetchFilm';
import ErrorListItem from './ErrorListItem';
import FilmListItem from './FilmListItem';
import ListItemSkeleton from './ListItemSkeleton';

function FilmListItemById({ id }: { id: string }) {
  const { isLoading, error, film } = useFetchFilm({ id });

  if (error instanceof Error) return <ErrorListItem error={error} />;

  if (isLoading) return <ListItemSkeleton />;

  if (!film) return <></>;

  return <FilmListItem film={film} />;
}

export default FilmListItemById;
