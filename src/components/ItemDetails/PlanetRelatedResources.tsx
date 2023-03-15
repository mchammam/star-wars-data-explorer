import { Planet } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import FilmListItemById from '../ListItems/FilmListItemById';
import PersonListItemById from '../ListItems/PersonListItemById';
import RelatedItemList from './RelatedItemList';

function PlanetRelatedResources({ planet }: { planet: Planet }) {
  const list = [
    {
      resourceHeader: 'Residents',
      listItems: planet.residents
        .map(getIdByURL)
        .map((id) => <PersonListItemById key={id} id={id} />),
    },
    {
      resourceHeader: 'Films',
      listItems: planet.films
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

export default PlanetRelatedResources;
