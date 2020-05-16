import { createReducer } from 'redux/create-reducer';

import { TOGGLE_CART_HIDDEN, ADD_ITEM, SUBTRACT_ITEM, REMOVE_ITEM, CLEAR_CART } from './cart.types';

import { addItemToCart, subtractItemFromCart } from './cart.utils';

/* -------------------------------------------------------------------------- */

const initialState = {
  hidden: true,
  cartItems: [],
};

const reducer = {
  [TOGGLE_CART_HIDDEN]: state => ({ ...state, hidden: !state.hidden }),
  [ADD_ITEM]: (state, payload) => ({ ...state, cartItems: addItemToCart(state.cartItems, payload) }),
  [SUBTRACT_ITEM]: (state, payload) => ({ ...state, cartItems: subtractItemFromCart(state.cartItems, payload) }),
  [REMOVE_ITEM]: (state, payload) => ({
    ...state,
    cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload.id),
  }),
  [CLEAR_CART]: state => ({ ...state, cartItems: [] }),
};

export const cartReducer = createReducer(initialState, reducer);
