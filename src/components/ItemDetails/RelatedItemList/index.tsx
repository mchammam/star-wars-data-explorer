import { ReactElement, useState } from 'react';
import styles from './styles.module.css';

const INITIAL_LIMIT = 5;
const SHOW_MORE_ITEMS = 5;

function RelatedItemList({
  header,
  items,
}: {
  header: ReactElement;
  items: ReactElement[];
}) {
  const itemCount = items.length;
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

  if (itemCount === 0) return <></>;

  return (
    <div>
      <h4>
        {header} ({showItems && `${limit}/`}
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
            {items.slice(0, limit).map((item) => item)}
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
