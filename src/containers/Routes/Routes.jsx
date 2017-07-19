import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Template from 'components/Template/Template';
import Item from 'containers/Item/Item';
import getTemplates from 'actions/getTemplates';
import getTemplateInfo from 'helpers/getTemplateInfo';
import getRouteItem from 'actions/getRouteItem';

class RoutesContainer extends Component {
  constructor(props) {
    super(props);

    const { match, routes, fourOhFour } = props;
    this.state = {
      ...getTemplateInfo(match, routes.routes, fourOhFour, routes.routeData),
      triedToGetItemData: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getTemplates());
  }

  componentWillReceiveProps({ match, routes, fourOhFour, loading }) {
    const state = getTemplateInfo(
      match,
      routes.routes,
      fourOhFour,
      routes.routeData,
    );

    let triedToGetItemData = this.state.triedToGetItemData;

    if (state.noTemplateDataItem && !loading && !triedToGetItemData) {
      triedToGetItemData = true;
      this.props.dispatch(getRouteItem(
        state.noTemplateDataItem.contentType,
        state.noTemplateDataItem.field,
        state.noTemplateDataItem.value,
      ));
    }

    this.setState({ ...state, triedToGetItemData });
  }

  render() {
    let template = this.state.templateId;

    if (this.state.noTemplateDataItem) {
      template = this.props.fourOhFour;
    }

    return (
      <Item
        element={Template}
        itemId={template}
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
  routes: PropTypes.shape({
    routes: PropTypes.arrayOf(PropTypes.shape({
      route: PropTypes.string,
      template: PropTypes.string,
    })),
  }).isRequired,
  fourOhFour: PropTypes.string,
};

RoutesContainer.defaultProps = {
  fourOhFour: null,
};

function mapStateToProps({ routes, fourOhFour, loading }) {
  return { routes, fourOhFour, loading };
}

export default withRouter(connect(mapStateToProps)(RoutesContainer));
