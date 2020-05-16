import { createReducer } from 'redux/create-reducer';

import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from './shop.types';

/* -------------------------------------------------------------------------- */

const initialState = {
  isFetching: false,
  collections: null,
  errorMessage: null,
};

const reducer = {
  [FETCH_COLLECTIONS_START]: state => ({ ...state, isFetching: true }),
  [FETCH_COLLECTIONS_SUCCESS]: (state, payload) => ({
    ...state,
    isFetching: false,
    collections: payload,
    errorMessage: null,
  }),
  [FETCH_COLLECTIONS_FAILURE]: (state, payload) => ({
    ...state,
    isFetching: false,
    errorMessage: payload,
  }),
};

export const shopReducer = createReducer(initialState, reducer);
