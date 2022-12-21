import { Film } from '../../services/apiTypes';
import ItemDetail from './ItemDetail';

function FilmDetails({ itemData }: { itemData: Film }) {
  return (
    <>
      <ItemDetail label="Director" value={itemData.director} />
      <ItemDetail label="Producer" value={itemData.producer} />
      <ItemDetail
        label="Release date"
        value={itemData.release_date.toString()}
      />
      <ItemDetail label="Opening crawl" value={itemData.opening_crawl} />
    </>
  );
}

export default FilmDetails;
