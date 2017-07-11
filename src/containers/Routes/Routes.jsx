import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Template from 'components/Template/Template';
import Item from 'containers/Item/Item';
import getProjects from 'actions/getProjects';
import getTemplateInfo from 'helpers/getTemplateInfo';

class RoutesContainer extends Component {
  constructor(props) {
    super(props);

    const { match, routes, fourOhFour, routeData } = props;
    this.state = getTemplateInfo(match, routes, fourOhFour, routeData);
  }

  componentDidMount() {
    this.props.dispatch(getProjects());
  }

  componentWillReceiveProps({ match, routes, fourOhFour, routeData }) {
    this.setState({ ...getTemplateInfo(match, routes, fourOhFour, routeData) });
  }

  render() {
    return (
      <Item
        element={Template}
        itemId={this.state.templateId}
        templateDataItem={this.state.templateDataItem}
        loading={this.props.loading}
      />
    );
  }
}

RoutesContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string,
    template: PropTypes.string,
  })).isRequired,
  fourOhFour: PropTypes.string,
  // eslint-disable-next-line
  routeData: PropTypes.object.isRequired,
};

RoutesContainer.defaultProps = {
  fourOhFour: null,
};

function mapStateToProps({ routes, routeData, fourOhFour, loading }) {
  return { routes, routeData, fourOhFour, loading };
}

export default withRouter(connect(mapStateToProps)(RoutesContainer));
