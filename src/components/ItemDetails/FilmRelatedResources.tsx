import { Film } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import PersonListItemById from '../ListItems/PersonListItemById';
import PlanetListItemById from '../ListItems/PlanetListItemById';
import SpecieListItemById from '../ListItems/SpecieListItemById';
import StarshipListItemById from '../ListItems/StarshipListItemById';
import VehicleListItemById from '../ListItems/VehicleListItemById';
import RelatedItemList from './RelatedItemList';

function FilmRelatedResources({ film }: { film: Film }) {
  const list = [
    {
      resourceHeader: 'Characters',
      listItems: film.characters
        .map(getIdByURL)
        .map((id) => <PersonListItemById key={id} id={id} />),
    },
    {
      resourceHeader: 'Species',
      listItems: film.species
        .map(getIdByURL)
        .map((id) => <SpecieListItemById key={id} id={id} />),
    },
    {
      resourceHeader: 'Planets',
      listItems: film.planets
        .map(getIdByURL)
        .map((id) => <PlanetListItemById key={id} id={id} />),
    },
    {
      resourceHeader: 'Starships',
      listItems: film.starships
        .map(getIdByURL)
        .map((id) => <StarshipListItemById key={id} id={id} />),
    },
    {
      resourceHeader: 'Vehicles',
      listItems: film.vehicles
        .map(getIdByURL)
        .map((id) => <VehicleListItemById key={id} id={id} />),
    },
  ];

  return (
    <>
      <h3>Related resources</h3>

      {list.map((relatedItems) => (
        <RelatedItemList
          key={relatedItems.resourceHeader}
          header={<>{relatedItems.resourceHeader}</>}
          items={relatedItems.listItems}
        />
      ))}
    </>
  );
}

export default FilmRelatedResources;
