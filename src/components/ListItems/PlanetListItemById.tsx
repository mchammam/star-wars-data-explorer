import { useFetchPlanet } from '../../hooks/api/useFetchPlanet';
import ErrorListItem from './ErrorListItem';
import ListItemSkeleton from './ListItemSkeleton';
import PlanetListItem from './PlanetListItem';

function PlanetListItemById({ id }: { id: string }) {
  const { isLoading, error, planet } = useFetchPlanet({ id });

  if (error instanceof Error) return <ErrorListItem error={error} />;

  if (isLoading) return <ListItemSkeleton />;

  if (!planet) return <></>;

  return <PlanetListItem planet={planet} />;
}

export default PlanetListItemById;
