// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function inputControl(WrappedComponent) {
  class InputControl extends PureComponent {
    constructor(props) {
      super(props);

      this.state = { value: props.value };

      this.onChange = this.onChange.bind(this);
      this.setValue = this.setValue.bind(this);
    }

    componentWillReceiveProps({ value }) {
      if (value !== this.props.value && value !== this.state.value) {
        this.setValue(value);
      }
    }

    onChange(event) {
      event.preventDefault();

      const { target: { value } } = event;

      if (value !== this.state.value) {
        this.setValue(value);
      }
    }

    setValue(value) {
      this.setState({ value });
      if (this.props.onChange) this.props.onChange(value, this.props.name);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          value={this.state.value || ''}
          onChange={this.onChange}
        />
      );
    }
  }

  InputControl.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  };

  InputControl.defaultProps = {
    onChange: null,
    value: '',
  };

  return InputControl;
}

export default inputControl;
