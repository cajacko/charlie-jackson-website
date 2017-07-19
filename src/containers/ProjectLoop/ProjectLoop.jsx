import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectLoop from 'components/ProjectLoop/ProjectLoop';
import { getSortedProjectsFromItems } from 'helpers/projectsFromItems';
import getProjects from 'actions/getProjects';

class ProjectLoopContainer extends Component {
  constructor(props) {
    super(props);

    const projects = getSortedProjectsFromItems(props.items);

    this.state = {
      title: props.title,
      allProjects: projects,
      visibleProjects: projects,
      noMorePosts: false,
    };

    this.getNextPosts = this.getNextPosts.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getProjects(this.props.projectsPerLoad));
  }

  componentWillReceiveProps({ items, title }) {
    const projects = getSortedProjectsFromItems(items);

    this.setState({
      title,
      allProjects: projects,
      visibleProjects: projects,
      noMorePosts: false,
    });
  }

  // eslint-disable-next-line
  getNextPosts() {

  }

  render() {
    return (
      <ProjectLoop
        title={this.state.title}
        projects={this.state.visibleProjects}
        getNextPosts={this.getNextPosts}
        noMorePosts={this.state.noMorePosts}
      />
    );
  }
}

ProjectLoopContainer.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  projectsPerLoad: PropTypes.number.isRequired,
};

ProjectLoopContainer.defaultProps = {

};

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps)(ProjectLoopContainer);
