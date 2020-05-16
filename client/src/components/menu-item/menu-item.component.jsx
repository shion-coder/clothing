import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubTitle,
} from './menu-item.styles';

/* -------------------------------------------------------------------------- */

const MenuItem = ({ title, imageUrl, linkUrl, size }) => {
  const history = useHistory();

  return (
    <MenuItemContainer size={size} onClick={() => history.push(`/${linkUrl}`)}>
      <BackgroundImageContainer imageUrl={imageUrl} />

      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubTitle>SHOP NOW</ContentSubTitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

/* -------------------------------------------------------------------------- */

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  linkUrl: PropTypes.string,
  size: PropTypes.string,
};

export default MenuItem;
