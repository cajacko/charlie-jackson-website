import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from 'components/Image/Image';
import Item from 'containers/Item/Item';

const SiteHeader = ({ fields }) => (
  <header className="SiteHeader">
    <Link className="SiteHeader-imageLink" to="/">
      <Item itemId={fields.image['en-GB'].sys.id} asset element={Image} className="SiteHeader-image" />
    </Link>
    <div className="SiteHeader-text">
      <Link className="SiteHeader-titleLink" to="/">
        <h1 className="SiteHeader-title">{fields.siteTitle['en-GB']}</h1>
      </Link>
      <p className="SiteHeader-description">{fields.description['en-GB']}</p>
    </div>
  </header>
);

SiteHeader.propTypes = {
  fields: PropTypes.shape({
    sitetitle: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    description: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    image: PropTypes.shape({
      'en-GB': PropTypes.shape({
        sys: PropTypes.shape({
          id: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default SiteHeader;
