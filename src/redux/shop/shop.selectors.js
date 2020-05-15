import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const shopSelector = state => state.shop;

export const selectShopCollections = createSelector([shopSelector], shop => shop.collections);

export const selectShopCollectionsIsLoaded = createSelector([shopSelector], shop => !!shop.collections);

export const selectShopCollectionsForPreview = createSelector([selectShopCollections], collections =>
  collections ? Object.values(collections) : [],
);

export const selectShopCollection = collectionUrlParam =>
  createSelector([selectShopCollections], collections => (collections ? collections[collectionUrlParam] : null));
