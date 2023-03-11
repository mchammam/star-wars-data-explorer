import { useLocation, useParams } from 'react-router-dom';
import { useFetchPlanet } from '../../services/api';
import RelatedResourcesSection from '../../components/ItemDetails/RelatedResourcesSection';
import ItemDetailsLoadingPage from '../../components/ItemDetails/ItemDetailsLoadingPage';
import ItemDetailsErrorPage from '../../components/ItemDetails/ItemDetailsErrorPage';
import ItemDetailsPage from '../../components/ItemDetails/ItemDetailsPage';
import ItemDetail from '../../components/ItemDetails/ItemDetail';

function PlanetDetails() {
  const location = useLocation();
  const initialData = location.state?.data ?? undefined;

  const params = useParams();
  const id = params.id ?? '0';

  const { isLoading, error, planet } = useFetchPlanet({
    id,
    initialData,
  });

  if (error instanceof Error)
    return <ItemDetailsErrorPage error={error} resource="planets" />;

  if (isLoading) return <ItemDetailsLoadingPage />;

  if (!planet) return <></>;

  const numberFormat = new Intl.NumberFormat();

  return (
    <ItemDetailsPage
      header={planet.name}
      relatedResourcesSection={<RelatedResourcesSection itemData={planet} />}
    >
      <ItemDetail
        label="Population"
        value={numberFormat.format(planet.population)}
      />
      <ItemDetail label="Terrain" value={planet.terrain} />
      <ItemDetail
        label="Surface water"
        value={numberFormat.format(planet.surface_water * 100)}
        unit="%"
      />
      <ItemDetail label="Climate" value={planet.climate} />
      <ItemDetail
        label="Gravity"
        value={numberFormat.format(planet.gravity)}
        unit=" standard G"
      />
      <ItemDetail
        label="Diameter"
        value={numberFormat.format(planet.diameter)}
        unit="km"
      />
      <ItemDetail
        label="Rotaion period"
        value={numberFormat.format(planet.rotation_period)}
        unit=" standard hours"
      />
      <ItemDetail
        label="Oribital period"
        value={numberFormat.format(planet.orbital_period)}
        unit=" standard days"
      />
    </ItemDetailsPage>
  );
}

export default PlanetDetails;
