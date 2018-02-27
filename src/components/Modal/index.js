import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import Button from '../Buttons/Button';
import Icon from '../Icon';
import SpacingContainer from '../Containers/SpacingContainer';

class Modal extends Component {
  render() {
    if (!this.props.children) return null;

    return (
      <div className="modal">
        <div className="modal__wrapper">
          <div className="modal__close">
            <Button action={this.context.hideContactModal}>
              <SpacingContainer mh2 mv2>
                <Icon icon="cancel" reduceWithWidth />
              </SpacingContainer>
            </Button>
          </div>
          <div className="modal__content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Modal.contextTypes = {
  hideContactModal: PropTypes.func,
};

Modal.propTypes = {
  children: PropTypes.node,
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
