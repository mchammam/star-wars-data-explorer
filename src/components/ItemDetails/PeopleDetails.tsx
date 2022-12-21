import { People } from '../../services/apiTypes';
import ItemDetail from './ItemDetail';

function PeopleDetails({ itemData }: { itemData: People }) {
  const numberFormat = new Intl.NumberFormat();

  return (
    <>
      <ItemDetail label="Name" value={itemData.name} />
      <ItemDetail label="Gender" value={itemData.gender} />
      <ItemDetail label="Birth year" value={itemData.birth_year} />
      <ItemDetail
        label="Height"
        value={numberFormat.format(itemData.height)}
        unit="cm"
      />
      <ItemDetail
        label="Mass"
        value={numberFormat.format(itemData.mass)}
        unit="kg"
      />
      <ItemDetail label="Skin color" value={itemData.skin_color} />
      <ItemDetail label="Hair color" value={itemData.hair_color} />
      <ItemDetail label="Eye color" value={itemData.eye_color} />
    </>
  );
}

export default PeopleDetails;
