import React, { PureComponent } from 'react';

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
      <div>
        {!this.props.bottom && nav}

        <div>
          {this.props.slides.map((slideContent, i) => (
            <div key={(slideContent && slideContent.key) || i}>
              {this.props.slide(slideContent, this.state.displayedIndex)}
            </div>
          ))}
        </div>

        {this.props.bottom && nav}
      </div>
    );
  }
}

export default Slider;
