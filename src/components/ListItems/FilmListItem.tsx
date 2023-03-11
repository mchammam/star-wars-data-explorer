import { Film } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import ListItem from './ListItem';

function FilmListItem({ film }: { film: Film }) {
  const id = getIdByURL(film.url);

  return (
    <ListItem
      linkTo={`/films/${id}`}
      linkState={film}
      title={film.title}
      subtitle={`Release date: ${film.release_date}`}
    />
  );
}

export default FilmListItem;
