import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForPreview } from 'redux/shop/shop.selectors';

import CollectionPreview from 'components/collection-preview/collection-preview.component';

import { CollectionsOverviewContainer } from './collections-overview.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

/* -------------------------------------------------------------------------- */

CollectionsOverview.propTypes = {
  collections: PropTypes.array,
};

export default connect(mapStateToProps)(CollectionsOverview);
