import { services, testimonials } from '../constants/data';

// Store images here to prevent garbage collection
let images = [];

class AssetPreload {
  static preload() {
    const preload = ({ image }) => AssetPreload.preloadImage(image);

    services.forEach(preload);
    testimonials.forEach(preload);
  }

  static preloadImage(image) {
    var img = new Image();
    img.src = image;
    images.push(img);
  }
}

export default AssetPreload;
