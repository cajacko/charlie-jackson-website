import React, { Component } from 'react';
import Text from '../../Text';
import Icon from '../../Icon';
import Button from '../../Buttons/Button';
import SpacingContainer from '../../Containers/SpacingContainer';

class IconSliderNavItem extends Component {
  render() {
    return (
      <Button>
        <div>
          <Icon
            icon={this.props.icon}
            color={this.props.active ? 'BLUE' : 'ORANGE'}
          />
          <SpacingContainer mt>
            <Text text={this.props.label} />
          </SpacingContainer>
        </div>
      </Button>
    );
  }
}

export default IconSliderNavItem;
