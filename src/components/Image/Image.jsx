import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ fields, className }) => (
  <img
    width={fields.file['en-GB'].details.image.width}
    height={fields.file['en-GB'].details.image.height}
    src={fields.file['en-GB'].url}
    className={className}
    alt={fields.title['en-GB']}
  />
);

Image.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.shape({
    title: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    file: PropTypes.shape({
      'en-GB': PropTypes.shape({
        url: PropTypes.string,
        details: PropTypes.shape({
          image: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number,
          }),
        }),
      }),
    }),
  }).isRequired,
};

Image.defaultProps = {
  className: null,
};

export default Image;
