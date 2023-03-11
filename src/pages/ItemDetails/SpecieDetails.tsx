import { useLocation, useParams } from 'react-router-dom';
import RelatedResourcesSection from '../../components/ItemDetails/RelatedResourcesSection';
import ItemDetailsLoadingPage from '../../components/ItemDetails/ItemDetailsLoadingPage';
import ItemDetailsErrorPage from '../../components/ItemDetails/ItemDetailsErrorPage';
import ItemDetailsPage from '../../components/ItemDetails/ItemDetailsPage';
import ItemDetail from '../../components/ItemDetails/ItemDetail';
import { useFetchSpecie } from '../../hooks/api/useFetchSpecie';

function SpecieDetails() {
  const location = useLocation();
  const initialData = location.state?.data ?? undefined;

  const params = useParams();
  const id = params.id ?? '0';

  const { isLoading, error, specie } = useFetchSpecie({
    id,
    initialData,
  });

  if (error instanceof Error)
    return <ItemDetailsErrorPage error={error} resource="species" />;

  if (isLoading) return <ItemDetailsLoadingPage />;

  if (!specie) return <></>;

  const numberFormat = new Intl.NumberFormat();

  return (
    <ItemDetailsPage
      header={specie.name}
      relatedResourcesSection={<RelatedResourcesSection itemData={specie} />}
    >
      <ItemDetail label="Classification" value={specie.classification} />
      <ItemDetail label="Language" value={specie.language} />
      <ItemDetail label="Designation" value={specie.designation} />
      <ItemDetail
        label="Average height"
        value={numberFormat.format(specie.average_height)}
        unit="cm"
      />
      <ItemDetail
        label="Average lifespan"
        value={numberFormat.format(specie.average_lifespan)}
        unit=" years"
      />
      <ItemDetail label="Eye colors" value={specie.eye_colors} />
      <ItemDetail label="Hair colors" value={specie.hair_colors} />
      <ItemDetail label="Skin colors" value={specie.skin_colors} />
    </ItemDetailsPage>
  );
}

export default SpecieDetails;
