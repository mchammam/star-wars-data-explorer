import { Planet } from '../../services/apiTypes';
import ItemDetail from './ItemDetail';

function PlanetDetails({ itemData }: { itemData: Planet }) {
  const numberFormat = new Intl.NumberFormat();
  return (
    <>
      <ItemDetail
        label="Population"
        value={numberFormat.format(itemData.population)}
      />
      <ItemDetail label="Terrain" value={itemData.terrain} />
      <ItemDetail
        label="Surface water"
        value={numberFormat.format(itemData.surface_water * 100)}
        unit="%"
      />
      <ItemDetail label="Climate" value={itemData.climate} />
      <ItemDetail
        label="Gravity"
        value={numberFormat.format(itemData.gravity)}
        unit=" standard G"
      />
      <ItemDetail
        label="Diameter"
        value={numberFormat.format(itemData.diameter)}
        unit="km"
      />
      <ItemDetail
        label="Rotaion period"
        value={numberFormat.format(itemData.rotation_period)}
        unit=" standard hours"
      />
      <ItemDetail
        label="Oribital period"
        value={numberFormat.format(itemData.orbital_period)}
        unit=" standard days"
      />
    </>
  );
}

export default PlanetDetails;
