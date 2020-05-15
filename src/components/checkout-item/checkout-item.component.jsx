import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { removeItem, subtractItem, addItem } from 'redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  Arrow,
  RemoveButtonContainer,
} from './checkout-item.styles';

/* -------------------------------------------------------------------------- */

const CheckoutItem = ({ cartItem, removeItem, subtractItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>

      <TextContainer>{name}</TextContainer>

      <QuantityContainer>
        <Arrow onClick={() => subtractItem(cartItem)}>&#10094;</Arrow>
        <span>{quantity}</span>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </QuantityContainer>

      <TextContainer>${price}</TextContainer>

      <RemoveButtonContainer onClick={() => removeItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

/* -------------------------------------------------------------------------- */

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
  removeItem: PropTypes.func,
  subtractItem: PropTypes.func,
  addItem: PropTypes.func,
};

export default connect(null, { removeItem, subtractItem, addItem })(CheckoutItem);
