import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addItem } from 'redux/cart/cart.actions';

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  AddButton,
} from './collection-item.styles';

/* -------------------------------------------------------------------------- */

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />

      <CollectionFooterContainer>
        <span>{name}</span>
        <span>${price}</span>
      </CollectionFooterContainer>

      <AddButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

/* -------------------------------------------------------------------------- */

CollectionItem.propTypes = {
  item: PropTypes.object,
  addItem: PropTypes.func,
};

export default connect(null, { addItem })(CollectionItem);
