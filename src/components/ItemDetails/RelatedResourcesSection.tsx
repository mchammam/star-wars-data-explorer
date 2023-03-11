import { APIResource, ItemData } from '../../services/apiTypes';
import { getIdByURL } from '../../services/getIdByURL';
import RelatedItemList from './RelatedItemList';

export type RelatedResources =
  | APIResource
  | 'characters'
  | 'residents'
  | 'homeworld'
  | 'pilots';

function getIdsFromURLS(URLS: string[] | string) {
  if (Array.isArray(URLS)) {
    return URLS.map((url) => getIdByURL(url));
  } else {
    return [getIdByURL(URLS)];
  }
}

function RelatedResourcesSection({ itemData }: { itemData: ItemData }) {
  const relatedResources: RelatedResources[] = [
    'films',
    'homeworld',
    'pilots',
    'species',
    'planets',
    'people',
    'characters',
    'residents',
    'starships',
    'vehicles',
  ];

  return (
    <>
      <h3>Related resources</h3>

      {relatedResources.map(
        (relatedResourse) =>
          itemData[relatedResourse as keyof typeof itemData]?.length > 0 && (
            <RelatedItemList
              key={relatedResourse}
              resource={relatedResourse}
              ids={getIdsFromURLS(
                itemData[relatedResourse as keyof typeof itemData]
              )}
            />
          )
      )}
    </>
  );
}

export default RelatedResourcesSection;
