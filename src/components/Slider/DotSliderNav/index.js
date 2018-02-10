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
              <div>
                <Button>
                  <div />
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
