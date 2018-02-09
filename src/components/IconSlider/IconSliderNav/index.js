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
          list={this.props.services.map(({ label, icon }) => ({
            key: label,
            component: (
              <IconSliderNavItem
                label={label}
                icon={icon}
                active={this.props.active === label}
                action={() => this.props.onChange(label)}
              />
            ),
          }))}
        />
      </nav>
    );
  }
}

export default IconSliderNav;
