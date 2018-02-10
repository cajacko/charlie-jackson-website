import React, { Component } from 'react';
import HorizontalList from '../../Lists/HorizontalList';
import './DotSliderNav.css';
import Button from '../../Buttons/Button';

class DotSliderNav extends Component {
  render() {
    return (
      <nav className="dotslidernav">
        <HorizontalList
          list={this.props.content.map(i => ({
            key: i,
            component: (
              <div className="dotslidernav__item">
                <Button fill>
                  <div
                    className={`dotslidernav__control ${
                      i === 0 ? 'dotslidernav__control--active' : ''
                    }`}
                  />
                </Button>
              </div>
            ),
          }))}
        />
      </nav>
    );
  }
}

export default DotSliderNav;
