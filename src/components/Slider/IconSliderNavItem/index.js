// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Icon from '../../Icon';
import ActiveFocusButton from '../../Buttons/ActiveFocusButton';
import SpacingContainer from '../../Containers/SpacingContainer';
import AlignContainer from '../../Containers/AlignContainer';
import './IconSliderNavItem.css';

class IconSliderNavItem extends Component {
  render() {
    return (
      <ActiveFocusButton
        action={this.props.action}
        fill
        active={this.props.active}
      >
        <SpacingContainer mb2>
          <AlignContainer hc>
            <Icon
              icon={this.props.icon}
              color={this.props.active ? 'BLUE' : 'ORANGE'}
            />
          </AlignContainer>
          <SpacingContainer mt>
            <div className="iconslidernavitem__text">
              <Text
                text={this.props.label}
                underline={this.props.active}
                reduceWithWidth
              />
            </div>
          </SpacingContainer>
        </SpacingContainer>
      </ActiveFocusButton>
    );
  }
}

IconSliderNavItem.propTypes = {
  action: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default IconSliderNavItem;
