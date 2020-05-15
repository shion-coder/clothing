import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from 'redux/cart/cart.selectors';
import { selectUserCurrent } from 'redux/user/user.selectors';
import { signOutStart } from 'redux/user/user.actions';

import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from 'assets/images/clothing.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrent,
  hidden: selectCartHidden,
});

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" to="/" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>

      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

/* -------------------------------------------------------------------------- */

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool,
  signOutStart: PropTypes.func,
};

export default connect(mapStateToProps, { signOutStart })(Header);
