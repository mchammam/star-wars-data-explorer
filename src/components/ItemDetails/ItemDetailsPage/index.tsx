import React, { ReactNode } from 'react';
import Page from '../../Page';
import styles from './styles.module.css';

function ItemDetailsPage({
  header,
  RelatedItemListSection,
  children,
}: {
  header: ReactNode;
  RelatedItemListSection: ReactNode;
  children: ReactNode;
}) {
  return (
    <Page header={header}>
      <>
        <div className={styles.itemDetails__box}>
          <ul className={styles.itemDetails__list}>{children}</ul>
        </div>

        {RelatedItemListSection}
      </>
    </Page>
  );
}

export default ItemDetailsPage;
