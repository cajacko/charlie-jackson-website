// @flow

import { services, testimonials } from '../constants/data';

// Store images here to prevent garbage collection
const images = [];

class AssetPreload {
  static preload() {
    const preload = ({ image }) => AssetPreload.preloadImage(image);

    services.forEach(preload);
    testimonials.forEach(preload);
  }

  static preloadImage(image: string) {
    const img = new Image();
    img.src = image;
    images.push(img);
  }
}

export default AssetPreload;
