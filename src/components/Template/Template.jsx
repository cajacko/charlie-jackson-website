import React from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import getComponents from 'helpers/getComponents';

const Template = (props) => {
  if (props.noItem) {
    // eslint-disable-next-line
    console.warn('Hardcoded 404, should never happen with server rendering');
    return null;
  }

  const components = getComponents(props.fields);

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

          return <Item key={key} itemId={component.sys.id} />;
        })
      }
    </div>
  );
};

Template.propTypes = {
  noItem: PropTypes.bool,
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
};


export default Template;
