import React, { ReactNode } from 'react';
import Page from '../../Page';
import styles from './styles.module.css';

function ItemDetailsPage({
  header,
  relatedResourcesSection,
  children,
}: {
  header: ReactNode;
  relatedResourcesSection: ReactNode;
  children: ReactNode;
}) {
  return (
    <Page header={header}>
      <>
        <div className={styles.itemDetails__box}>
          <ul className={styles.itemDetails__list}>{children}</ul>
        </div>

        {relatedResourcesSection}
      </>
    </Page>
  );
}

export default ItemDetailsPage;
