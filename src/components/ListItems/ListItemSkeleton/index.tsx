import styles from './styles.module.css';

function ListItemSkeleton({ count = 1 }: { count?: number }) {
  return (
    <>
      {[...Array(count)].map((_value: undefined, i) => (
        <li key={i} className={styles.item}>
          <h3 className={styles.item__title}></h3>
          <p className={styles.item__subtitle}></p>
        </li>
      ))}
    </>
  );
}

export default ListItemSkeleton;
