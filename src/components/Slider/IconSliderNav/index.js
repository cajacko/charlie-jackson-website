import React, { Component } from 'react';
import HorizontalList from '../../Lists/HorizontalList';
import IconSliderNavItem from '../IconSliderNavItem';
import './IconSliderNav.css';

class IconSliderNav extends Component {
  render() {
    return (
      <nav className="iconslidernav">
        <HorizontalList
          stretch
          list={this.props.items.map(({ label, icon }, i) => ({
            key: label,
            component: (
              <IconSliderNavItem
                label={label}
                icon={icon}
                active={this.props.active === i}
                action={() => this.props.onChange(i)}
              />
            ),
          }))}
        />
      </nav>
    );
  }
}

export default IconSliderNav;
