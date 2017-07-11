/* eslint react/no-danger: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ fields }) => (
  <div dangerouslySetInnerHTML={{ __html: fields.svg['en-GB'] }} />
);

Icon.propTypes = {
  fields: PropTypes.shape({
    svg: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
  }).isRequired,
};

export default Icon;
