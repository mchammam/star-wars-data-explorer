import { Person } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import ListItem from './ListItem';

function PersonListItem({ person }: { person: Person }) {
  const id = getIdByURL(person.url);

  return (
    <ListItem
      linkTo={`/people/${id}`}
      linkState={person}
      title={person.name}
      subtitle={person.gender !== 'n/a' ? person.gender : '--'}
    />
  );
}

export default PersonListItem;
