// @flow

import * as React from 'react';

export type Testimonial = {
  key: string,
  quote: string,
  image: string,
  imageAlt: string,
  name: string,
  [key: string]: any,
};

export type Service = {
  key: string,
  image: string,
  imageAlt: string,
  text: string,
  label: string,
  icon: string,
  [key: string]: any,
};

export type SlideContent = Testimonial | Service;

export type Slides = Array<SlideContent>;

export type Props = {
  slide: (
    slideContent: SlideContent,
    displayedIndex: number,
    height?: ?number
  ) => React.Node,
  slides: Slides,
  bottom?: ?boolean,
  nav: (
    displayedIndex: number,
    changeActiveItem: (index: number) => void,
    slides: Slides
  ) => React.Node,
};

export type State = {
  height?: ?number,
  displayedIndex: number,
};

export type SliderType = ?{
  slickGoTo: (index: number) => void,
};

export type SliderWrap = ?{
  clientHeight: number,
};
