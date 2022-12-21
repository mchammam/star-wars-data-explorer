import { useState } from 'react';
import { fetchItemData } from '../../../services/api';
import { APIResource } from '../../../services/apiTypes';
import ListItem from '../../ListItem';
import ListItemSkeleton from '../../ListItemSkeleton';
import { RelatedResources } from '../RelatedResourcesSection';
import styles from './styles.module.css';

const INITIAL_LIMIT = 5;
const SHOW_MORE_ITEMS = 5;

function RenderListItem({
  resource,
  id
}: {
  resource: APIResource;
  id: string;
}) {
  const { isLoading, error, itemData } = fetchItemData({ resource, id });

  return (
    <>
      {error && `Error: ${error}`}
      {isLoading && <ListItemSkeleton />}
      {itemData && <ListItem resource={resource} itemData={itemData} />}
    </>
  );
}

function resourceAPIName(resource: RelatedResources) {
  if (resource === 'homeworld') return 'planets';
  if (resource === 'characters') return 'people';
  if (resource === 'residents') return 'people';
  if (resource === 'pilots') return 'people';
  return resource;
}

function RelatedItemList({
  resource,
  ids
}: {
  resource: RelatedResources;
  ids: string[];
}) {
  const [showCharacters, setShowCharacters] = useState(false);
  const [limit, setLimit] = useState(() =>
    INITIAL_LIMIT < ids.length ? INITIAL_LIMIT : ids.length
  );

  function handleShowMoreClick() {
    setLimit((prevLimit) => {
      return prevLimit + SHOW_MORE_ITEMS < ids.length
        ? prevLimit + SHOW_MORE_ITEMS
        : ids.length;
    });
  }

  return (
    <div>
      <h4>
        {resource} ({showCharacters && `${limit}/`}
        {ids.length})
        {!showCharacters && (
          <button
            className="btn btn--sm"
            onClick={() => setShowCharacters(true)}
          >
            <small>Show</small>
          </button>
        )}
      </h4>

      {showCharacters && (
        <>
          <ul className={styles.itemList}>
            {ids
              .filter((id, index) => index < limit)
              .map((id) => (
                <RenderListItem
                  key={resourceAPIName(resource) + id}
                  resource={resourceAPIName(resource)}
                  id={id}
                />
              ))}
          </ul>

          <p className={styles.pagination}>
            {limit !== ids.length &&
              `Currently showing ${limit} of ${ids.length}.`}
            {limit < ids.length && (
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
