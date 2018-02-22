import React, { Component } from 'react';
import HorizontalList from '../../Lists/HorizontalList';
import './DotSliderNav.css';
import Button from '../../Buttons/Button';

class DotSliderNav extends Component {
  render() {
    return (
      <nav className="dotslidernav">
        <HorizontalList
          list={this.props.content.map(({ name }, i) => ({
            key: name,
            component: (
              <div className="dotslidernav__item">
                <Button fill action={() => this.props.onChange(i)}>
                  <div
                    className={`dotslidernav__control ${
                      i === this.props.active
                        ? 'dotslidernav__control--active'
                        : ''
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
