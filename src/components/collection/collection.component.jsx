import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { selectShopCollection } from 'redux/shop/shop.selectors';

import CollectionItem from 'components/collection-item/collection-item.component';

import { CollectionContainer, CollectionTitle, ItemsContainer } from './collection.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

const Collection = ({ collection }) => {
  if (!collection) return null;

  const { title, items } = collection;

  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>

      <ItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionContainer>
  );
};

/* -------------------------------------------------------------------------- */

Collection.propTypes = {
  collection: PropTypes.object,
};

export default connect(mapStateToProps)(Collection);
