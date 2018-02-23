import React, { PureComponent } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Slider extends PureComponent {
  state = {
    displayedIndex: 0,
    height: null,
  };

  constructor(props) {
    super(props);

    this.changeActiveItem = this.changeActiveItem.bind(this);
    this.afterChange = this.afterChange.bind(this);
    this.setHeight = this.setHeight.bind(this);
  }

  componentDidMount() {
    // Needed as Slider probably does something weird on initial load and it
    // just needs to sort itself out
    setTimeout(this.setHeight);
    window.addEventListener('resize', this.setHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setHeight);
  }

  setHeight() {
    if (this.state.height !== null) {
      return this.setState({ height: null }, () => {
        this.setHeight();
      });
    }

    this.setState({ height: this.sliderWrap.clientHeight });
  }

  changeActiveItem(displayedIndex) {
    if (displayedIndex !== this.state.displayedIndex) {
      this.setState({ displayedIndex }, () => {
        this.slider.slickGoTo(displayedIndex);
      });
    }
  }

  afterChange(displayedIndex) {
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

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      arrows: false,
      afterChange: this.afterChange,
    };

    return (
      <div>
        {!this.props.bottom && nav}

        <div ref={ref => (this.sliderWrap = ref)}>
          <SlickSlider ref={c => (this.slider = c)} {...settings}>
            {this.props.slides.map((slideContent, i) => (
              <div
                key={(slideContent && slideContent.key) || i}
                className="slider__slide"
                style={{
                  width: `${Math.floor(100 / this.props.slides.length)}%`,
                }}
              >
                {this.props.slide(
                  slideContent,
                  this.state.displayedIndex,
                  this.state.height,
                )}
              </div>
            ))}
          </SlickSlider>
        </div>

        {this.props.bottom && nav}
      </div>
    );
  }
}

export default Slider;
