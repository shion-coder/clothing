import React from 'react';

import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

/* -------------------------------------------------------------------------- */

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_IwNACIrw0YrKeSOphyRl1Eco00iTKKNPUN';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment successfull');
      })
      .catch(error => {
        alert(
          'There was an issue with your payment. Please sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

/* -------------------------------------------------------------------------- */

export default StripeButton;
