import React, { Component } from 'react';
import Text from '../../Text';
import Icon from '../../Icon';
import Button from '../../Buttons/Button';
import SpacingContainer from '../../Containers/SpacingContainer';
import './IconSliderNavItem.css';

class IconSliderNavItem extends Component {
  render() {
    return (
      <div className="iconslidernavitem">
        <Button action={this.props.action}>
          <SpacingContainer pb>
            <div>
              <Icon
                icon={this.props.icon}
                color={this.props.active ? 'BLUE' : 'ORANGE'}
              />
              <SpacingContainer mt>
                <div className="iconslidernavitem__text">
                  <Text text={this.props.label} underline={this.props.active} />
                </div>
              </SpacingContainer>
            </div>
          </SpacingContainer>
        </Button>
      </div>
    );
  }
}

export default IconSliderNavItem;
