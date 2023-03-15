import { useLocation, useParams } from 'react-router-dom';
import { useFetchFilm } from '../../hooks/api/useFetchFilm';
import ItemDetailsLoadingPage from '../../components/ItemDetails/ItemDetailsLoadingPage';
import ItemDetailsErrorPage from '../../components/ItemDetails/ItemDetailsErrorPage';
import ItemDetailsPage from '../../components/ItemDetails/ItemDetailsPage';
import ItemDetail from '../../components/ItemDetails/ItemDetail';
import FilmRelatedResources from '../../components/ItemDetails/FilmRelatedResources';

function FilmDetails() {
  const location = useLocation();
  const initialData = location.state ?? undefined;

  const params = useParams();
  const id = params.id ?? '0';

  const { isLoading, error, film } = useFetchFilm({
    id,
    initialData,
  });

  if (error instanceof Error)
    return <ItemDetailsErrorPage error={error} resource="films" />;

  if (isLoading) return <ItemDetailsLoadingPage />;

  if (!film) return <></>;

  return (
    <ItemDetailsPage
      header={film.title}
      RelatedItemListSection={<FilmRelatedResources film={film} />}
    >
      <ItemDetail label="Director" value={film.director} />
      <ItemDetail label="Producer" value={film.producer} />
      <ItemDetail label="Release date" value={film.release_date} />
      <ItemDetail label="Opening crawl" value={film.opening_crawl} />
    </ItemDetailsPage>
  );
}

export default FilmDetails;
