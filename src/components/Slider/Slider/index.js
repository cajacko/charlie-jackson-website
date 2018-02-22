import React, { PureComponent } from 'react';
import './Slider.css';

class Slider extends PureComponent {
  state = {
    displayedIndex: 0,
  };

  constructor(props) {
    super(props);

    this.changeActiveItem = this.changeActiveItem.bind(this);
  }

  changeActiveItem(displayedIndex) {
    if (displayedIndex !== this.state.displayedIndex) {
      this.setState({ displayedIndex });
    }
  }

  render() {
    const nav = this.props.nav(
      this.state.displayedIndex,
      this.changeActiveItem,
      this.props.slides,
    );

    return (
      <div className="slider">
        {!this.props.bottom && nav}

        <div className="slider__slides">
          <div
            className="slider__slideswrapper"
            style={{
              width: `${this.props.slides.length * 100}%`,
              marginLeft: `-${this.state.displayedIndex * 100}%`,
            }}
          >
            {this.props.slides.map((slideContent, i) => (
              <div
                key={(slideContent && slideContent.key) || i}
                className="slider__slide"
                style={{
                  width: `${Math.floor(100 / this.props.slides.length)}%`,
                }}
              >
                {this.props.slide(slideContent, this.state.displayedIndex)}
              </div>
            ))}
          </div>
        </div>

        {this.props.bottom && nav}
      </div>
    );
  }
}

export default Slider;
