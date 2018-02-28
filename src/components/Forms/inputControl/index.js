// @flow

import * as React from 'react';
import PropTypes from 'prop-types';

type Props = {
  name: string,
  onChange: (value?: string, name: string) => void,
  value?: string,
};

type State = {
  value?: string,
};

function inputControl(WrappedComponent: React.ComponentType<{
    [key: string]: any,
  }>) {
  class InputControl extends React.PureComponent<Props, State> {
    static propTypes = {
      onChange: PropTypes.func,
      name: PropTypes.string.isRequired,
      value: PropTypes.string,
    };

    static defaultProps = {
      onChange: null,
      value: '',
    };

    constructor(props: Props) {
      super(props);

      this.state = { value: props.value };

      (this: any).onChange = this.onChange.bind(this);
      (this: any).setValue = this.setValue.bind(this);
    }

    componentWillReceiveProps({ value }: Props) {
      if (value !== this.props.value && value !== this.state.value) {
        this.setValue(value);
      }
    }

    onChange(event: SyntheticInputEvent<HTMLInputElement>) {
      event.preventDefault();

      const { target: { value } } = event;

      if (value !== this.state.value) {
        this.setValue(value);
      }
    }

    setValue(value?: string) {
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

  return InputControl;
}

export default inputControl;
