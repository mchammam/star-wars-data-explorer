import { useFetchPerson } from '../../hooks/api/useFetchPerson';
import ErrorListItem from './ErrorListItem';
import ListItemSkeleton from './ListItemSkeleton';
import PersonListItem from './PersonListItem';

function PersonListItemById({ id }: { id: string }) {
  const { isLoading, error, person } = useFetchPerson({ id });

  if (error instanceof Error) return <ErrorListItem error={error} />;

  if (isLoading) return <ListItemSkeleton />;

  if (!person) return <></>;

  return <PersonListItem person={person} />;
}

export default PersonListItemById;
