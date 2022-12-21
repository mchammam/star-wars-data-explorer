import styles from './styles.module.css';

function ItemDetail({
  label,
  value,
  unit
}: {
  label: string;
  value: string;
  unit?: string;
}) {
  if (!value || value === 'NaN') return <></>;

  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}:</span> {value}
      {unit}
    </li>
  );
}

export default ItemDetail;
