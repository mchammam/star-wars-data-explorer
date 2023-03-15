import { useFetchVehicle } from '../../hooks/api/useFetchVehicle';
import ErrorListItem from './ErrorListItem';
import ListItemSkeleton from './ListItemSkeleton';
import VehicleListItem from './VehicleListItem';

function VehicleListItemById({ id }: { id: string }) {
  const { isLoading, error, vehicle } = useFetchVehicle({ id });

  if (error instanceof Error) return <ErrorListItem error={error} />;

  if (isLoading) return <ListItemSkeleton />;

  if (!vehicle) return <></>;

  return <VehicleListItem vehicle={vehicle} />;
}

export default VehicleListItemById;
