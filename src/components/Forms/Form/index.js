import React, { PureComponent } from 'react';

class Form extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.setFormState = this.setFormState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setFormState(value, name) {
    if (this.state[name] !== value) {
      this.setState({ [name]: value });
    }
  }

  onSubmit(event) {
    if (event && event.preventDefault) event.preventDefault();

    if (this.props.onSubmit) this.props.onSubmit(this.state);
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

export default Form;
