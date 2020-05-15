import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from 'redux/shop/shop.actions';

import { Route } from 'react-router-dom';

import Spinner from 'components/spinner/spinner.component';

import { Container } from './shop.styles';

/* -------------------------------------------------------------------------- */

const Collection = lazy(() => import('components/collection/collection.component'));
const CollectionsOverview = lazy(() => import('components/collections-overview/collections-overview.component'));

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </Suspense>
    </Container>
  );
};

/* -------------------------------------------------------------------------- */

Shop.propTypes = {
  match: PropTypes.object,
  fetchCollectionsStart: PropTypes.func,
};

export default connect(null, { fetchCollectionsStart })(Shop);
