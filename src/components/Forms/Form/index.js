import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Form extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.setFormState = this.setFormState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    if (event && event.preventDefault) event.preventDefault();

    if (this.props.onSubmit) this.props.onSubmit(this.state);
  }

  setFormState(value, name) {
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
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
