import React, { PureComponent } from 'react';

function inputControl(WrappedComponent) {
  return class extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default inputControl;
