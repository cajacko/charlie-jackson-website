import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from 'components/App/App';
import getProjects from 'actions/getProjects';

class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProjects());
  }

  render() {
    return <App />;
  }
}

export default connect()(AppContainer);
