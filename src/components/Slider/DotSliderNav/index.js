// @flow

import React from 'react';
import PropTypes from 'prop-types';
import HorizontalList from '../../Lists/HorizontalList';
import './DotSliderNav.css';
import ActiveFocusButton from '../../Buttons/ActiveFocusButton';

const DotSliderNav = ({
  content,
  active,
  onChange,
}: {
  content: Array<{ name: string, [key: string]: any }>,
  onChange: (index: number) => void,
  active: number,
}) => (
  <nav className="dotslidernav">
    <HorizontalList
      list={content.map(({ name }, i) => ({
        key: name,
        component: (
          <div className="dotslidernav__item">
            <ActiveFocusButton
              active={i === active}
              fill
              action={() => onChange(i)}
            >
              <div
                className={`dotslidernav__control ${
                  i === active ? 'dotslidernav__control--active' : ''
                }`}
              />
            </ActiveFocusButton>
          </div>
        ),
      }))}
    />
  </nav>
);

DotSliderNav.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};

export default DotSliderNav;
