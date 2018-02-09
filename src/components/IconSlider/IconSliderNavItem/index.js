import React, { Component } from 'react';
import Text from '../../Text';
import Icon from '../../Icon';
import Button from '../../Buttons/Button';
import SpacingContainer from '../../Containers/SpacingContainer';
import './IconSliderNavItem.css';

class IconSliderNavItem extends Component {
  render() {
    const Content = (
      <SpacingContainer pb>
        <div>
          <Icon
            icon={this.props.icon}
            color={this.props.active ? 'BLUE' : 'ORANGE'}
          />
          <SpacingContainer mt>
            <div className="iconslidernavitem__text">
              <Text text={this.props.label} />
            </div>
          </SpacingContainer>
        </div>
      </SpacingContainer>
    );

    return (
      <div className="iconslidernavitem">
        {this.props.active ? (
          <div className="iconslidernavitem__static">{Content}</div>
        ) : (
          <Button action={this.props.action}>{Content}</Button>
        )}
      </div>
    );
  }
}

export default IconSliderNavItem;
