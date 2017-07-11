import React from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import getComponents from 'helpers/getComponents';
import FourOhFourDefault from 'components/FourOhFourDefault/FourOhFourDefault';
import FullScreenLoading from 'components/FullScreenLoading/FullScreenLoading';

const Template = ({ noItem, fields, loading, templateDataItem }) => {
  if (noItem) {
    if (loading) {
      return <FullScreenLoading />;
    }

    // eslint-disable-next-line
    console.warn('Hardcoded 404, should never happen with server rendering');
    return <FourOhFourDefault />;
  }

  const components = getComponents(fields);

  if (!components) {
    return null;
  }

  let i = 0;

  return (
    <div>
      {
        components.map((component) => {
          i += 0;

          if (!component.sys) {
            // eslint-disable-next-line
            console.warn('Unexpected response from api');
            return null;
          }

          if (!component.sys.id) {
            // eslint-disable-next-line
            console.warn('Unexpected response from api');
            return null;
          }

          const key = `${i}-${component.sys.id}`;

          return (
            <Item
              key={key}
              itemId={component.sys.id}
              templateDataItem={templateDataItem}
            />
          );
        })
      }
    </div>
  );
};

Template.propTypes = {
  noItem: PropTypes.bool,
  loading: PropTypes.bool,
  templateDataItem: PropTypes.string,
  fields: PropTypes.shape({
    components: PropTypes.shape({
      'en-GB': PropTypes.arrayOf(PropTypes.shape({
        sys: PropTypes.shape({
          id: PropTypes.string,
        }),
      })),
    }),
  }),
};

Template.defaultProps = {
  noItem: false,
  fields: null,
  loading: false,
  templateDataItem: null,
};


export default Template;
