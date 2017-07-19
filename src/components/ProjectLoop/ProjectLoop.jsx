import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import ProjectLoopItem from 'components/ProjectLoopItem/ProjectLoopItem';

class ProjectLoop extends Component {
  constructor(props) {
    super(props);
    this.getNextPostsIfShould = this.getNextPostsIfShould.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.getNextPostsIfShould);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getNextPostsIfShould);
  }

  getNextPostsIfShould() {
    if (this.props.loading) {
      return;
    }

    const bottomPosition = window.pageYOffset + window.innerHeight;
    const bottomSpacing = document.body.offsetHeight - bottomPosition;

    if (bottomSpacing > 500) {
      return;
    }

    this.props.getNextPosts();
  }

  render() {
    return (
      <div className="Projects">
        <h2 className="Projects-title">{this.props.title}</h2>
        <main id="Projects-loop" className="Projects-loop">
          {
            this.props.projects.map(id => (
              <Item key={id} itemId={id} element={ProjectLoopItem} />
            ))
          }
        </main>

        <nav className="navigation pagination" role="navigation" style={{ display: 'none' }}>
          <h2 className="screen-reader-text">Posts navigation</h2>
          <div className="nav-links">
            <span className="page-numbers current">1</span>
            <a className="page-numbers" href="https://charliejackson.com/page/2/">2</a>
            <span className="page-numbers dots">…</span>
            <a className="page-numbers" href="https://charliejackson.com/page/6/">6</a>
            <a className="next page-numbers" href="https://charliejackson.com/page/2/">
              <span id="Projects-next">Next Page</span>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

ProjectLoop.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
  getNextPosts: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ProjectLoop;
