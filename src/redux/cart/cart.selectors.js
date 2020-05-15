import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const cartSelector = state => state.cart;

export const selectCartHidden = createSelector([cartSelector], cart => cart.hidden);

export const selectCartItems = createSelector([cartSelector], cart => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((accumulateQuantity, cartItem) => accumulateQuantity + cartItem.quantity, 0),
);

export const selectCartItemsTotalPrice = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((accumulateQuantity, cartItem) => accumulateQuantity + cartItem.quantity * cartItem.price, 0),
);
