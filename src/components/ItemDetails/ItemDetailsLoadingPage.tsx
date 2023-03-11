import React from 'react';
import Page from '../Page';
import ItemDetailsHeadingSkeleton from './ItemDetailsHeadingSkeleton';
import ItemDetailsSkeleton from './ItemDetailsSkeleton/ItemDetailsSkeleton';

function ItemDetailsLoadingPage() {
  return (
    <Page header={<ItemDetailsHeadingSkeleton />}>
      <ItemDetailsSkeleton />
    </Page>
  );
}

export default ItemDetailsLoadingPage;
