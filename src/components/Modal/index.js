// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import Button from '../Buttons/Button';
import Icon from '../Icon';
import SpacingContainer from '../Containers/SpacingContainer';

const Modal = (
  { children }: { children?: React.Node },
  { hideContactModal }: { hideContactModal: () => void }
) => {
  if (!children) return null;

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__close">
          <Button action={hideContactModal}>
            <SpacingContainer mh2 mv2>
              <Icon icon="cancel" reduceWithWidth />
            </SpacingContainer>
          </Button>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};

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
