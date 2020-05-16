import { TOGGLE_CART_HIDDEN, ADD_ITEM, SUBTRACT_ITEM, REMOVE_ITEM, CLEAR_CART } from './cart.types';

/* -------------------------------------------------------------------------- */

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const subtractItem = item => ({
  type: SUBTRACT_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
