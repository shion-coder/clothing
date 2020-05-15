import React, { useEffect, lazy, Suspense } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserCurrent } from 'redux/user/user.selectors';
import { checkUserSession } from 'redux/user/user.actions';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/header/header.component';
import Spinner from 'components/spinner/spinner.component';

/* -------------------------------------------------------------------------- */

const Home = lazy(() => import('pages/home/home.page'));
const Shop = lazy(() => import('pages/shop/shop.page'));
const CheckOut = lazy(() => import('pages/checkout/checkout.page'));
const SignInSignUp = lazy(() => import('pages/sign-in-sign-up/sign-in-sign-up.page'));

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrent,
});

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <Header />

      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)} />
        </Suspense>
      </Switch>
    </>
  );
};

/* -------------------------------------------------------------------------- */

App.propTypes = {
  checkUserSession: PropTypes.func,
};

export default connect(mapStateToProps, { checkUserSession })(App);
