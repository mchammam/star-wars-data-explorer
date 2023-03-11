import { Specie } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import ListItem from './ListItem';

function SpecieListItem({ specie }: { specie: Specie }) {
  const id = getIdByURL(specie.url);

  return (
    <ListItem
      linkTo={`/species/${id}`}
      linkState={specie}
      title={specie.name}
      subtitle={specie.classification}
    />
  );
}

export default SpecieListItem;
