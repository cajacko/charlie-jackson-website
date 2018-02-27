import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

IconSliderNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
  active: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IconSliderNav;
