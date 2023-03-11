import { Planet } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import ListItem from './ListItem';

function PlanetListItem({ planet }: { planet: Planet }) {
  const id = getIdByURL(planet.url);
  const numberFormat = new Intl.NumberFormat();

  return (
    <ListItem
      linkTo={`/planets/${id}`}
      linkState={planet}
      title={planet.name}
      subtitle={
        planet.population && numberFormat.format(planet.population) !== 'NaN'
          ? `Population: ${numberFormat.format(planet.population)}`
          : '--'
      }
    />
  );
}

export default PlanetListItem;
