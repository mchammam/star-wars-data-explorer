import { useLocation, useParams } from 'react-router-dom';
import RelatedResourcesSection from '../../components/ItemDetails/RelatedResourcesSection';
import ItemDetailsLoadingPage from '../../components/ItemDetails/ItemDetailsLoadingPage';
import ItemDetailsErrorPage from '../../components/ItemDetails/ItemDetailsErrorPage';
import ItemDetailsPage from '../../components/ItemDetails/ItemDetailsPage';
import ItemDetail from '../../components/ItemDetails/ItemDetail';
import { useFetchStarship } from '../../services/api';

function StarshipDetails() {
  const location = useLocation();
  const initialData = location.state?.data ?? undefined;

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
      relatedResourcesSection={<RelatedResourcesSection itemData={starship} />}
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
