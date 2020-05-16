import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from 'redux/cart/cart.actions';
import { selectCartItems } from 'redux/cart/cart.selectors';

import { useHistory } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropDownButton,
} from './cart-dropdown.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>

      <CartDropDownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropDownButton>
    </CartDropDownContainer>
  );
};

/* -------------------------------------------------------------------------- */

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(CartDropdown);
