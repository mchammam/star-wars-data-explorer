import { Person } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import PlanetListItemById from '../ListItems/PlanetListItemById';
import SpecieListItemById from '../ListItems/SpecieListItemById';
import StarshipListItemById from '../ListItems/StarshipListItemById';
import VehicleListItemById from '../ListItems/VehicleListItemById';
import RelatedItemList from './RelatedItemList';

function PersonRelatedResources({ person }: { person: Person }) {
  const list = [
    {
      resourceHeader: 'Homeworld',
      listItems: (() => {
        const id = getIdByURL(person.homeworld);
        return [<PlanetListItemById key={id} id={id} />];
      })(),
    },
    {
      resourceHeader: 'Species',
      listItems: person.species
        .map(getIdByURL)
        .map((id) => <SpecieListItemById key={id} id={id} />),
    },
    {
      resourceHeader: 'Starships',
      listItems: person.starships
        .map(getIdByURL)
        .map((id) => <StarshipListItemById key={id} id={id} />),
    },
    {
      resourceHeader: 'Vehicles',
      listItems: person.vehicles
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

export default PersonRelatedResources;
