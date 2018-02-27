// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HorizontalList from '../../Lists/HorizontalList';
import './DotSliderNav.css';
import ActiveFocusButton from '../../Buttons/ActiveFocusButton';

class DotSliderNav extends Component {
  render() {
    return (
      <nav className="dotslidernav">
        <HorizontalList
          list={this.props.content.map(({ name }, i) => ({
            key: name,
            component: (
              <div className="dotslidernav__item">
                <ActiveFocusButton
                  active={i === this.props.active}
                  fill
                  action={() => this.props.onChange(i)}
                >
                  <div
                    className={`dotslidernav__control ${
                      i === this.props.active
                        ? 'dotslidernav__control--active'
                        : ''
                    }`}
                  />
                </ActiveFocusButton>
              </div>
            ),
          }))}
        />
      </nav>
    );
  }
}

DotSliderNav.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};

export default DotSliderNav;
