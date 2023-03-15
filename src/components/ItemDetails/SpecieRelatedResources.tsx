import { Specie } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import FilmListItemById from '../ListItems/FilmListItemById';
import PersonListItemById from '../ListItems/PersonListItemById';
import PlanetListItemById from '../ListItems/PlanetListItemById';
import RelatedItemList from './RelatedItemList';

function SpecieRelatedResources({ specie }: { specie: Specie }) {
  const list = [
    {
      resourceHeader: 'Homeworld',
      listItems: (() => {
        if (specie.homeworld === null) return [];

        const id = getIdByURL(specie.homeworld);
        return [<PlanetListItemById key={id} id={id} />];
      })(),
    },
    {
      resourceHeader: 'People',
      listItems: specie.people
        .map(getIdByURL)
        .map((id) => <PersonListItemById key={id} id={id} />),
    },
    {
      resourceHeader: 'Films',
      listItems: specie.films
        .map(getIdByURL)
        .map((id) => <FilmListItemById key={id} id={id} />),
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

export default SpecieRelatedResources;
