import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Template from 'components/Template/Template';
import Item from 'containers/Item/Item';
import getProjects from 'actions/getProjects';
import matchRoute from 'helpers/matchRoute';
import getRouteDataItem from 'helpers/getRouteDataItem';

class RoutesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { templateId: null, templateDataItem: null };
  }

  componentDidMount() {
    this.props.dispatch(getProjects());
  }

  componentWillReceiveProps({ match, routes, fourOhFour, routeData }) {
    const route = matchRoute(routes, match.url, fourOhFour);
    let { templateId, templateDataItem } = this.state;

    if (route) {
      templateId = route.template;

      if (route.match && route.entryField && route.contentType) {
        templateDataItem = getRouteDataItem(
          routeData,
          route.contentType,
          route.entryField,
          route.match,
        );
      } else {
        templateDataItem = null;
      }
    } else {
      templateId = null;
      templateDataItem = null;
    }

    this.setState({ templateId, templateDataItem });
  }

  render() {
    return (
      <Item
        element={Template}
        itemId={this.state.templateId}
        templateDataItem={this.state.templateDataItem}
      />
    );
  }
}

RoutesContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ routes, routeData, fourOhFour }) {
  return { routes, routeData, fourOhFour };
}

export default withRouter(connect(mapStateToProps)(RoutesContainer));
