import React, { Component } from 'react';
import Text from '../Text';
import Img from '../Img';

class Testimonial extends Component {
  render() {
    return (
      <div className="testimonial">
        <p>"{this.props.quote}"</p>
        <div>
          <Img src={this.props.image} imageAlt="Hello" fill />
        </div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Testimonial;
