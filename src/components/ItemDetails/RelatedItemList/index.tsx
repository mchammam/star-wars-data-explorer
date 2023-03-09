import { useState } from 'react';
import { useFetchItemData } from '../../../services/api';
import { APIResource } from '../../../services/apiTypes';
import ListItem from '../../ListItem';
import ListItemSkeleton from '../../ListItemSkeleton';
import { RelatedResources } from '../RelatedResourcesSection';
import styles from './styles.module.css';

const INITIAL_LIMIT = 5;
const SHOW_MORE_ITEMS = 5;

function RenderListItem({
  resource,
  id,
}: {
  resource: APIResource;
  id: string;
}) {
  const { isLoading, error, itemData } = useFetchItemData({ resource, id });

  return (
    <>
      {error && `Error: ${error}`}
      {isLoading && <ListItemSkeleton />}
      {itemData && <ListItem resource={resource} itemData={itemData} />}
    </>
  );
}

function resourceAPIName(resource: RelatedResources) {
  switch (resource) {
    case 'homeworld':
      return 'planets';
    case 'characters':
      return 'people';
    case 'residents':
      return 'people';
    case 'pilots':
      return 'people';
    default:
      return resource;
  }
}

function RelatedItemList({
  resource,
  ids,
}: {
  resource: RelatedResources;
  ids: string[];
}) {
  const itemCount = ids.length;
  const [showItems, setShowItems] = useState(false);
  const [limit, setLimit] = useState(() =>
    INITIAL_LIMIT < itemCount ? INITIAL_LIMIT : itemCount
  );

  function handleShowMoreClick() {
    setLimit((prevLimit) => {
      return prevLimit + SHOW_MORE_ITEMS < itemCount
        ? prevLimit + SHOW_MORE_ITEMS
        : itemCount;
    });
  }
  console.log(ids.slice(0, 5));
  return (
    <div>
      <h4>
        {resource} ({showItems && `${limit}/`}
        {itemCount})
        {!showItems && (
          <button className="btn btn--sm" onClick={() => setShowItems(true)}>
            <small>Show</small>
          </button>
        )}
      </h4>

      {showItems && (
        <>
          <ul className={styles.itemList}>
            {ids.slice(0, limit).map((id) => (
              <RenderListItem
                key={resourceAPIName(resource) + id}
                resource={resourceAPIName(resource)}
                id={id}
              />
            ))}
          </ul>

          <p className={styles.pagination}>
            {limit !== itemCount &&
              `Currently showing ${limit} of ${itemCount}.`}
            {limit < itemCount && (
              <small>
                <button className="btn" onClick={handleShowMoreClick}>
                  Show more
                </button>
              </small>
            )}
          </p>
        </>
      )}
    </div>
  );
}

export default RelatedItemList;
