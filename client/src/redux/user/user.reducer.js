import { createReducer } from 'redux/create-reducer';

import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, SIGN_IN_OUT_UP_FAILURE } from './user.types';

/* -------------------------------------------------------------------------- */

const initialState = {
  currentUser: null,
  errorMessage: null,
};

const reducer = {
  [SIGN_IN_SUCCESS]: (state, payload) => ({ ...state, currentUser: payload, errorMessage: null }),
  [SIGN_OUT_SUCCESS]: state => ({ ...state, currentUser: null, errorMessage: null }),
  [SIGN_IN_OUT_UP_FAILURE]: (state, payload) => ({ ...state, errorMessage: payload }),
};

export const userReducer = createReducer(initialState, reducer);
