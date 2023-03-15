import { useLocation, useParams } from 'react-router-dom';
import ItemDetailsLoadingPage from '../../components/ItemDetails/ItemDetailsLoadingPage';
import ItemDetailsErrorPage from '../../components/ItemDetails/ItemDetailsErrorPage';
import ItemDetailsPage from '../../components/ItemDetails/ItemDetailsPage';
import ItemDetail from '../../components/ItemDetails/ItemDetail';
import { useFetchStarship } from '../../hooks/api/useFetchStarship';
import StarshipRelatedResources from '../../components/ItemDetails/StarshipRelatedResources';

function StarshipDetails() {
  const location = useLocation();
  const initialData = location.state ?? undefined;

  const params = useParams();
  const id = params.id ?? '0';

  const { isLoading, error, starship } = useFetchStarship({
    id,
    initialData,
  });

  if (error instanceof Error)
    return <ItemDetailsErrorPage error={error} resource="starships" />;

  if (isLoading) return <ItemDetailsLoadingPage />;

  if (!starship) return <></>;

  const numberFormat = new Intl.NumberFormat();

  return (
    <ItemDetailsPage
      header={starship.name}
      RelatedItemListSection={<StarshipRelatedResources starship={starship} />}
    >
      <ItemDetail label="Manufacturer" value={starship.manufacturer} />
      <ItemDetail label="Model" value={starship.model} />
      <ItemDetail label="Starship class" value={starship.starship_class} />
      <ItemDetail
        label="Max atmosphering speed"
        value={numberFormat.format(starship.max_atmosphering_speed)}
      />
      <ItemDetail label="MGLT" value={starship.MGLT} />
      <ItemDetail label="Crew" value={numberFormat.format(starship.crew)} />
      <ItemDetail
        label="Passengers"
        value={numberFormat.format(starship.passengers)}
      />
      <ItemDetail
        label="Length"
        value={numberFormat.format(starship.length)}
        unit="m"
      />
      <ItemDetail
        label="Cargo capacity"
        value={numberFormat.format(starship.cargo_capacity)}
        unit="kg"
      />
      <ItemDetail label="Consumables" value={starship.consumables} />
      <ItemDetail
        label="Cost"
        value={numberFormat.format(starship.cost_in_credits)}
        unit=" Galactic Credits"
      />
      <ItemDetail
        label="Hyperdrive rating"
        value={starship.hyperdrive_rating}
      />
    </ItemDetailsPage>
  );
}

export default StarshipDetails;
