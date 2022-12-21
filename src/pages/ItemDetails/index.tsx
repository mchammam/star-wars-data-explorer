import { Link, useLocation, useParams } from 'react-router-dom';
import {
  APIResource,
  Film,
  People,
  Planet,
  Specie,
  Starship,
  Vehicle
} from '../../services/apiTypes';
import { fetchItemData } from '../../services/api';
import ItemDetailsHeadingSkeleton from '../../components/ItemDetails/ItemDetailsHeadingSkeleton';
import ItemDetailsSkeleton from '../../components/ItemDetails/ItemDetailsSkeleton/ItemDetailsSkeleton';
import RelatedResourcesSection from '../../components/ItemDetails/RelatedResourcesSection';
import Page from '../../components/Page';
import FilmDetails from '../../components/ItemDetails/FilmDetails';
import PlanetDetails from '../../components/ItemDetails/PlanetDetails';
import SpecieDetails from '../../components/ItemDetails/SpecieDetails';
import PeopleDetails from '../../components/ItemDetails/PeopleDetails';
import VehicleDetails from '../../components/ItemDetails/VehicleDetails';
import StarshipDetails from '../../components/ItemDetails/StarshipDetails';
import styles from './styles.module.css';

function ItemDetails({ resource }: { resource: APIResource }) {
  const location = useLocation();
  const initialData = location.state?.data ? location.state?.data : undefined;

  const params = useParams();
  const id = params.id ? params.id : '0';

  const { isLoading, error, itemData } = fetchItemData({
    resource,
    id,
    initialData
  });

  if (itemData?.detail === 'Not found')
    return (
      <Page header="Not Found">
        <Link className="btn" to={`/${resource}`}>
          Back to {resource}
        </Link>
      </Page>
    );

  return (
    <Page
      header={
        <>
          {isLoading && <ItemDetailsHeadingSkeleton />}
          {error && 'Error'}
          {itemData && (itemData.title ? itemData.title : itemData.name)}
        </>
      }
    >
      <>
        {isLoading && <ItemDetailsSkeleton />}
        {error && error}

        {itemData && (
          <>
            <div className={styles.itemDetails__box}>
              <ul className={styles.itemDetails__list}>
                {
                  {
                    films: <FilmDetails itemData={itemData as Film} />,
                    planets: <PlanetDetails itemData={itemData as Planet} />,
                    species: <SpecieDetails itemData={itemData as Specie} />,
                    people: <PeopleDetails itemData={itemData as People} />,
                    starships: (
                      <StarshipDetails itemData={itemData as Starship} />
                    ),
                    vehicles: <VehicleDetails itemData={itemData as Vehicle} />
                  }[resource]
                }
              </ul>
            </div>

            <RelatedResourcesSection itemData={itemData} />
          </>
        )}
      </>
    </Page>
  );
}

export default ItemDetails;
