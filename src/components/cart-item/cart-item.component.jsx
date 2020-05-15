import React from 'react';
import PropTypes from 'prop-types';

import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles';

/* -------------------------------------------------------------------------- */

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />

      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

/* -------------------------------------------------------------------------- */

CartItem.propTypes = {
  item: PropTypes.object,
};

export default React.memo(CartItem);
