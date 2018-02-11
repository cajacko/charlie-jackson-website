import React, { PureComponent } from 'react';

function inputControl(WrappedComponent) {
  return class extends PureComponent {
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

    setValue(value) {
      this.setState({ value });
      if (this.props.onChange) this.props.onChange(value);
    }

    onChange(event) {
      event.preventDefault();

      const value = event.target.value;

      if (value !== this.state.value) {
        this.setValue(value);
      }
    }

    render() {
      return (
        <WrappedComponent
          value={this.state.value || ''}
          onChange={this.onChange}
          {...this.props}
        />
      );
    }
  };
}

export default inputControl;
