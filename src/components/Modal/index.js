import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  render() {
    if (!this.props.children) return null;

    return <div className="modal">{this.props.children}</div>;
  }
}

export default Modal;
