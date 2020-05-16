import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotalPrice } from 'redux/cart/cart.selectors';

import CheckoutItem from 'components/checkout-item/checkout-item.component';
import StripeButton from 'components/stripe-button/stripe-button.component';

import {
  CheckOutContainer,
  CheckOutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
} from './checkout.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice,
});

const CheckOut = ({ cartItems, totalPrice }) => {
  const columns = ['Product', 'Description', 'Quantiy', 'Price', 'Remove'];

  return (
    <CheckOutContainer>
      <CheckOutHeaderContainer>
        {columns.map((column, index) => (
          <HeaderBlockContainer key={index}>
            <span>{column}</span>
          </HeaderBlockContainer>
        ))}
      </CheckOutHeaderContainer>

      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalContainer>
        <span>TOTAL: ${totalPrice}</span>
      </TotalContainer>

      <TestWarningContainer>
        * Please use the following test credit card for payments *
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </TestWarningContainer>

      <StripeButton price={totalPrice} />
    </CheckOutContainer>
  );
};

/* -------------------------------------------------------------------------- */

CheckOut.propTypes = {
  cartItems: PropTypes.array,
  totalPrice: PropTypes.number,
};

export default connect(mapStateToProps)(CheckOut);
