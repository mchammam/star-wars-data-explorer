import styles from './styles.module.css';

function ItemDetailsSkeleton() {
  return (
    <div className={styles.item}>
      <div className={`${styles.line} ${styles.w80}`}></div>
      <div className={`${styles.line} ${styles.w40}`}></div>
      <div className={`${styles.line} ${styles.w60}`}></div>
      <div className={`${styles.line} ${styles.w100}`}></div>
      <div className={`${styles.line} ${styles.w100}`}></div>
    </div>
  );
}

export default ItemDetailsSkeleton;
