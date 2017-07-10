import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from 'components/App/App';
import getProjects from 'actions/getProjects';
import Item from 'containers/Item/Item';

class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProjects());
  }

  render() {
    if (this.props.templates && this.props.templates.Home) {
      return (
        <Item
          element={App}
          itemId={this.props.templates.Home}
        />
      );
    }

    return null;
  }
}

AppContainer.propTypes = {
  templates: PropTypes.shape({
    Home: PropTypes.string,
    Single: PropTypes.string,
  }),
  dispatch: PropTypes.func.isRequired,
};

AppContainer.defaultProps = {
  templates: {},
};

function mapStateToProps({ templates }) {
  return { templates };
}

export default connect(mapStateToProps)(AppContainer);
