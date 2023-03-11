import { useLocation, useParams } from 'react-router-dom';
import RelatedResourcesSection from '../../components/ItemDetails/RelatedResourcesSection';
import ItemDetailsLoadingPage from '../../components/ItemDetails/ItemDetailsLoadingPage';
import ItemDetailsErrorPage from '../../components/ItemDetails/ItemDetailsErrorPage';
import ItemDetailsPage from '../../components/ItemDetails/ItemDetailsPage';
import ItemDetail from '../../components/ItemDetails/ItemDetail';
import { useFetchPerson } from '../../services/api';

function PersonDetails() {
  const location = useLocation();
  const initialData = location.state?.data ?? undefined;

  const params = useParams();
  const id = params.id ?? '0';

  const { isLoading, error, person } = useFetchPerson({
    id,
    initialData,
  });

  if (error instanceof Error)
    return <ItemDetailsErrorPage error={error} resource="people" />;

  if (isLoading) return <ItemDetailsLoadingPage />;

  if (!person) return <></>;

  const numberFormat = new Intl.NumberFormat();

  return (
    <ItemDetailsPage
      header={person.name}
      relatedResourcesSection={<RelatedResourcesSection itemData={person} />}
    >
      <ItemDetail label="Name" value={person.name} />
      <ItemDetail label="Gender" value={person.gender} />
      <ItemDetail label="Birth year" value={person.birth_year} />
      <ItemDetail
        label="Height"
        value={numberFormat.format(person.height)}
        unit="cm"
      />
      <ItemDetail
        label="Mass"
        value={numberFormat.format(person.mass)}
        unit="kg"
      />
      <ItemDetail label="Skin color" value={person.skin_color} />
      <ItemDetail label="Hair color" value={person.hair_color} />
      <ItemDetail label="Eye color" value={person.eye_color} />
    </ItemDetailsPage>
  );
}

export default PersonDetails;
