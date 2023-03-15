import { useFetchStarship } from '../../hooks/api/useFetchStarship';
import ErrorListItem from './ErrorListItem';
import ListItemSkeleton from './ListItemSkeleton';
import StarshipListItem from './StarshipListItem';

function StarshipListItemById({ id }: { id: string }) {
  const { isLoading, error, starship } = useFetchStarship({ id });

  if (error instanceof Error) return <ErrorListItem error={error} />;

  if (isLoading) return <ListItemSkeleton />;

  if (!starship) return <></>;

  return <StarshipListItem starship={starship} />;
}

export default StarshipListItemById;
