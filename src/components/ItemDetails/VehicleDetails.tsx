import { Vehicle } from '../../services/apiTypes';
import ItemDetail from './ItemDetail';

function VehicleDetails({ itemData }: { itemData: Vehicle }) {
  const numberFormat = new Intl.NumberFormat();

  return (
    <>
      <ItemDetail label="Manufacturer" value={itemData.manufacturer} />
      <ItemDetail label="Model" value={itemData.model} />
      <ItemDetail label="Vehicle class" value={itemData.vehicle_class} />
      <ItemDetail
        label="Max atmosphering speed"
        value={numberFormat.format(itemData.max_atmosphering_speed)}
      />
      <ItemDetail label="Crew" value={numberFormat.format(itemData.crew)} />
      <ItemDetail
        label="Passengers"
        value={numberFormat.format(itemData.passengers)}
      />
      <ItemDetail
        label="Length"
        value={numberFormat.format(itemData.length)}
        unit="m"
      />
      <ItemDetail
        label="Cargo capacity"
        value={numberFormat.format(itemData.cargo_capacity)}
        unit="kg"
      />
      <ItemDetail label="Consumables" value={itemData.consumables} />
      <ItemDetail
        label="Cost"
        value={numberFormat.format(itemData.cost_in_credits)}
        unit=" Galactic Credits"
      />
    </>
  );
}

export default VehicleDetails;
