import { Vehicle } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import ListItem from './ListItem';

function VehicleListItem({ vehicle }: { vehicle: Vehicle }) {
  const id = getIdByURL(vehicle.url);

  return (
    <ListItem
      linkTo={`/vehicles/${id}`}
      linkState={vehicle}
      title={vehicle.name}
      subtitle={vehicle.manufacturer}
    />
  );
}

export default VehicleListItem;
