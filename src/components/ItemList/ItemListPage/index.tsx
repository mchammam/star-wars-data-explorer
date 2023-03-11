import { ReactNode } from 'react';
import Page from '../../Page';
import styles from './styles.module.css';

function ItemListPage({
  header,
  searchForm,
  statusText,
  pagination,
  children,
}: {
  header: ReactNode;
  searchForm: ReactNode;
  statusText: ReactNode;
  pagination: ReactNode;
  children: ReactNode;
}) {
  return (
    <Page header={header}>
      {searchForm}
      {statusText}

      <ul className={styles.itemList}>{children}</ul>

      {pagination}
    </Page>
  );
}

export default ItemListPage;
