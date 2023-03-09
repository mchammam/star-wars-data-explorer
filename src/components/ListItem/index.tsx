import { Link } from 'react-router-dom';
import { APIResource } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import styles from './styles.module.css';

function PlanetSubtitle({ population }: { population?: number }) {
  const numberFormat = new Intl.NumberFormat();

  return (
    <>
      {population && numberFormat.format(population) !== 'NaN'
        ? `Population: ${numberFormat.format(population)}`
        : '--'}
    </>
  );
}

function ListItem({
  resource,
  itemData,
}: {
  resource: APIResource;
  itemData: {
    url: string;
    title?: string;
    name?: string;
    release_date?: string;
    population?: number;
    classification?: string;
    gender?: string;
    manufacturer?: string;
  };
}) {
  const id = getIdByURL(itemData.url);
  

  return (
    <li key={itemData.url} className={styles.listItem}>
      <Link to={`/${resource}/${id}`} state={{ data: itemData }}>
        <h3 className={styles.listItem__title}>
          {itemData.title ? itemData.title : itemData.name}
        </h3>

        <p className={styles.listItem__subtitle}>
          <small>
            {
              {
                films: `Release date: ${itemData.release_date}`,
                planets: <PlanetSubtitle population={itemData.population} />,
                species: itemData.classification,
                people: itemData.gender !== 'n/a' ? itemData.gender : '--',
                starships: itemData.manufacturer,
                vehicles: itemData.manufacturer,
              }[resource]
            }
          </small>
        </p>
      </Link>
    </li>
  );
}

export default ListItem;
