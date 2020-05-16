import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from 'redux/cart/cart.selectors';
import { toggleCartHidden } from 'redux/cart/cart.actions';

import { CartIconContainer, ShoppingIcon, ItemCounContainer } from './cart-icon.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCounContainer>{itemCount}</ItemCounContainer>
    </CartIconContainer>
  );
};

/* -------------------------------------------------------------------------- */

CartIcon.propTypes = {
  itemCount: PropTypes.number,
  toggleCartHidden: PropTypes.func,
};

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
