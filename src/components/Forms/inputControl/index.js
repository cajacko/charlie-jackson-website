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
      if (this.props.onChange) this.props.onChange(value, this.props.name);
    }

    onChange(event) {
      event.preventDefault();

      const value = event.target.value;

      console.warn(value);

      if (value !== this.state.value) {
        this.setValue(value);
      }
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
  };
}

export default inputControl;
