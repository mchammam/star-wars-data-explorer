import { useLocation, useParams } from 'react-router-dom';
import RelatedResourcesSection from '../../components/ItemDetails/RelatedResourcesSection';
import ItemDetailsLoadingPage from '../../components/ItemDetails/ItemDetailsLoadingPage';
import ItemDetailsErrorPage from '../../components/ItemDetails/ItemDetailsErrorPage';
import ItemDetailsPage from '../../components/ItemDetails/ItemDetailsPage';
import ItemDetail from '../../components/ItemDetails/ItemDetail';
import { useFetchVehicle } from '../../hooks/api/useFetchVehicle';

function VehicleDetails() {
  const location = useLocation();
  const initialData = location.state?.data ?? undefined;

  const params = useParams();
  const id = params.id ?? '0';

  const { isLoading, error, vehicle } = useFetchVehicle({
    id,
    initialData,
  });

  if (error instanceof Error)
    return <ItemDetailsErrorPage error={error} resource="starships" />;

  if (isLoading) return <ItemDetailsLoadingPage />;

  if (!vehicle) return <></>;

  const numberFormat = new Intl.NumberFormat();

  return (
    <ItemDetailsPage
      header={vehicle.name}
      relatedResourcesSection={<RelatedResourcesSection itemData={vehicle} />}
    >
      <ItemDetail label="Manufacturer" value={vehicle.manufacturer} />
      <ItemDetail label="Model" value={vehicle.model} />
      <ItemDetail label="Vehicle class" value={vehicle.vehicle_class} />
      <ItemDetail
        label="Max atmosphering speed"
        value={numberFormat.format(vehicle.max_atmosphering_speed)}
      />
      <ItemDetail label="Crew" value={numberFormat.format(vehicle.crew)} />
      <ItemDetail
        label="Passengers"
        value={numberFormat.format(vehicle.passengers)}
      />
      <ItemDetail
        label="Length"
        value={numberFormat.format(vehicle.length)}
        unit="m"
      />
      <ItemDetail
        label="Cargo capacity"
        value={numberFormat.format(vehicle.cargo_capacity)}
        unit="kg"
      />
      <ItemDetail label="Consumables" value={vehicle.consumables} />
      <ItemDetail
        label="Cost"
        value={numberFormat.format(vehicle.cost_in_credits)}
        unit=" Galactic Credits"
      />
    </ItemDetailsPage>
  );
}

export default VehicleDetails;
