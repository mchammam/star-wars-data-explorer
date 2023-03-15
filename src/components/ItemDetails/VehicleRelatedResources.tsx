import { Vehicle } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import FilmListItemById from '../ListItems/FilmListItemById';
import PersonListItemById from '../ListItems/PersonListItemById';
import RelatedItemList from './RelatedItemList';

function VehicleRelatedResources({ vehicle }: { vehicle: Vehicle }) {
  const list = [
    {
      resourceHeader: 'Films',
      listItems: vehicle.films
        .map(getIdByURL)
        .map((id) => <FilmListItemById key={id} id={id} />),
    },
    {
      resourceHeader: 'Pilots',
      listItems: vehicle.pilots
        .map(getIdByURL)
        .map((id) => <PersonListItemById key={id} id={id} />),
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

export default VehicleRelatedResources;
