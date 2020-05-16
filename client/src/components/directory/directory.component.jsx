import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from 'redux/directory/directory.selectors';

import MenuItem from 'components/menu-item/menu-item.component';

import { DirectoryContainer } from './directory.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSecitonProps }) => (
      <MenuItem key={id} {...otherSecitonProps} />
    ))}
  </DirectoryContainer>
);

/* -------------------------------------------------------------------------- */

Directory.propTypes = {
  sections: PropTypes.array,
};

export default connect(mapStateToProps)(Directory);
