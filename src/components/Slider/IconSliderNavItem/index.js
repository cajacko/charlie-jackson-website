import React, { Component } from 'react';
import Text from '../../Text';
import Icon from '../../Icon';
import Button from '../../Buttons/Button';
import SpacingContainer from '../../Containers/SpacingContainer';
import AlignContainer from '../../Containers/AlignContainer';
import './IconSliderNavItem.css';

class IconSliderNavItem extends Component {
  render() {
    return (
        <Button action={this.props.action} fill>
          <SpacingContainer mb2>
            <AlignContainer hc>
              <Icon
                icon={this.props.icon}
                color={this.props.active ? 'BLUE' : 'ORANGE'}
              />
              </AlignContainer>
              <SpacingContainer mt>
                <div className="iconslidernavitem__text">
                  <Text text={this.props.label} underline={this.props.active} reduceWithWidth />
                </div>
              </SpacingContainer>
          </SpacingContainer>
        </Button>
    );
  }
}

export default IconSliderNavItem;
