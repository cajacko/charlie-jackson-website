// @flow

import React from 'react';
import PropTypes from 'prop-types';
import HorizontalList from '../../Lists/HorizontalList';
import IconSliderNavItem from '../IconSliderNavItem';
import './IconSliderNav.css';

const IconSliderNav = ({
  items,
  active,
  onChange,
}: {
  items: Array<{ label: string, icon: string, [key: string]: any }>,
  onChange: (index: number) => void,
  active: number,
}) => (
  <nav className="iconslidernav">
    <HorizontalList
      stretch
      list={items.map(({ label, icon }, i) => ({
        key: label,
        component: (
          <IconSliderNavItem
            label={label}
            icon={icon}
            active={active === i}
            action={() => onChange(i)}
          />
        ),
      }))}
    />
  </nav>
);

IconSliderNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
  active: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IconSliderNav;
