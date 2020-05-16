import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import CollectionItem from 'components/collection-item/collection-item.component';

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';

/* -------------------------------------------------------------------------- */

const CollectionPreview = ({ title, routeName, items }) => {
  const history = useHistory();

  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`shop/${routeName}`)}>{title.toUpperCase()}</TitleContainer>

      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

/* -------------------------------------------------------------------------- */

CollectionPreview.propTypes = {
  title: PropTypes.string,
  routeName: PropTypes.string,
  items: PropTypes.array,
};

export default CollectionPreview;
