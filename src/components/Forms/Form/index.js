// @flow

import * as React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: (data: {
    setFormState: (value?: ?string, name: string) => void,
    submit: (
      event: SyntheticEvent<HTMLFormElement | HTMLButtonElement>
    ) => void,
  }) => React.Node,
  onSubmit: (formState: {}) => void,
};

type State = {
  [key: string]: string,
};

class Form extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};

    (this: any).setFormState = this.setFormState.bind(this);
    (this: any).onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event: SyntheticEvent<HTMLFormElement | HTMLButtonElement>) {
    if (event && event.preventDefault) event.preventDefault();

    if (this.props.onSubmit) this.props.onSubmit(this.state);
  }

  setFormState(value?: ?string, name: string) {
    if (this.state[name] !== value) {
      this.setState({ [name]: value });
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.children({
          setFormState: this.setFormState,
          submit: this.onSubmit,
        })}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
