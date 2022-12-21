import { Specie } from '../../services/apiTypes';
import ItemDetail from './ItemDetail';

function SpecieDetails({ itemData }: { itemData: Specie }) {
  const numberFormat = new Intl.NumberFormat();

  return (
    <>
      <ItemDetail label="Classification" value={itemData.classification} />
      <ItemDetail label="Language" value={itemData.language} />
      <ItemDetail label="Designation" value={itemData.designation} />
      <ItemDetail
        label="Average height"
        value={numberFormat.format(itemData.average_height)}
        unit="cm"
      />
      <ItemDetail
        label="Average lifespan"
        value={numberFormat.format(itemData.average_lifespan)}
        unit=" years"
      />
      <ItemDetail label="Eye colors" value={itemData.eye_colors} />
      <ItemDetail label="Hair colors" value={itemData.hair_colors} />
      <ItemDetail label="Skin colors" value={itemData.skin_colors} />
    </>
  );
}

export default SpecieDetails;
