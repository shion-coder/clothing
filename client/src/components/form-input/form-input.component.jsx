import React from 'react';
import PropTypes from 'prop-types';

import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';

/* -------------------------------------------------------------------------- */

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />

    {label && <FormInputLabel {...otherProps}>{label}</FormInputLabel>}
  </GroupContainer>
);

/* -------------------------------------------------------------------------- */

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
};

export default FormInput;
