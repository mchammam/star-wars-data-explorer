import { Starship } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import ListItem from './ListItem';

function StarshipListItem({ starship }: { starship: Starship }) {
  const id = getIdByURL(starship.url);

  return (
    <ListItem
      linkTo={`/starships/${id}`}
      linkState={starship}
      title={starship.name}
      subtitle={starship.manufacturer}
    />
  );
}

export default StarshipListItem;
