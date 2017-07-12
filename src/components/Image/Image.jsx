import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ fields, className, width, height, fill }) => {
  let imageHeight = fields.file['en-GB'].details.image.height;
  let imageWidth = fields.file['en-GB'].details.image.width;

  let fillText = '';

  if (fill) {
    fillText = '&fit=fill';
  }

  const ratio = imageHeight / imageWidth;

  if (height && width) {
    imageHeight = height;
    imageWidth = width;
  } else if (height && !width) {
    imageHeight = height;
    imageWidth = Math.floor(imageHeight / ratio);
    fillText = '&fit=fill';
  } else if (!height && width) {
    imageWidth = width;
    imageHeight = Math.floor(ratio * imageWidth);
    fillText = '&fit=fill';
  }

  const url = `${fields.file['en-GB'].url}?w=${imageWidth}&h=${imageHeight}${fillText}&fm=jpg&fl=progressive`;

  return (
    <img
      width={imageWidth}
      height={imageHeight}
      src={url}
      className={className}
      alt={fields.title['en-GB']}
    />
  );
};

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.bool,
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
  width: null,
  height: null,
  fill: true,
};

export default Image;
