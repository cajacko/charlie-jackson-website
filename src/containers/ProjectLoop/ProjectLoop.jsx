import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectLoop from 'components/ProjectLoop/ProjectLoop';
import { getSortedProjectsFromItems } from 'helpers/projectsFromItems';

class ProjectLoopContainer extends Component {
  constructor(props) {
    super(props);

    const projects = getSortedProjectsFromItems(props.items);

    this.state = {
      title: props.fields.title['en-GB'],
      allProjects: projects,
      visibleProjects: projects,
      noMorePosts: false,
    };

    this.getNextPosts = this.getNextPosts.bind(this);
  }

  componentWillReceiveProps() {

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
  fields: PropTypes.shape({
    title: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
  }).isRequired,
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
};

ProjectLoopContainer.defaultProps = {

};

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps)(ProjectLoopContainer);
