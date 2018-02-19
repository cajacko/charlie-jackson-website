import React, { PureComponent } from 'react';
import './ContentContainer.css';
import SpacingContainer from '../SpacingContainer';

class ContentContainer extends PureComponent {
  render() {
    return (
      <div className="contentcontainer">
        <SpacingContainer {...this.props}>
          {this.props.children}
        </SpacingContainer>
      </div>
    );
  }
}

export default ContentContainer;
