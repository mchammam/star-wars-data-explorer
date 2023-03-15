import { useFetchSpecie } from '../../hooks/api/useFetchSpecie';
import ErrorListItem from './ErrorListItem';
import ListItemSkeleton from './ListItemSkeleton';
import SpecieListItem from './SpecieListItem';

function SpecieListItemById({ id }: { id: string }) {
  const { isLoading, error, specie } = useFetchSpecie({ id });

  if (error instanceof Error) return <ErrorListItem error={error} />;

  if (isLoading) return <ListItemSkeleton />;

  if (!specie) return <></>;

  return <SpecieListItem specie={specie} />;
}

export default SpecieListItemById;
