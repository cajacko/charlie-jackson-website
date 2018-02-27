import React, { PureComponent } from 'react';
import './ContentContainer.css';
import SpacingContainer from '../SpacingContainer';

class ContentContainer extends PureComponent {
  render() {
    return (
      <div className="contentcontainer">
        <div className="contentcontainer__wrapper">
          <SpacingContainer {...this.props}>
            {this.props.children}
          </SpacingContainer>
        </div>
      </div>
    );
  }
}

export default ContentContainer;
