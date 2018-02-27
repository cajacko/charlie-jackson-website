// @flow

import { services, testimonials } from '../constants/data';

// Store images here to prevent garbage collection
const images = [];

/**
 * Class to preload assets, primarily images
 */
class AssetPreload {
  /**
   * Preload all images in the data
   *
   * @return {Void} No return value
   */
  static preload() {
    /**
     * Helper to preload an image, given a data object. As services and
     * testimonials share a similar structure (An array of objects, with an
     * image prop as the url)
     *
     * @param {Object} data The data item
     * @param {String} data.image The image url
     * @return {Void} No return value
     */
    const preload = ({ image }) => AssetPreload.preloadImage(image);

    services.forEach(preload);
    testimonials.forEach(preload);
  }

  /**
   * Preload a specific image
   *
   * @param {String} image Url of an image
   * @return {Void} No return value
   */
  static preloadImage(image: string) {
    const img = new Image();
    img.src = image;
    images.push(img);
  }
}

export default AssetPreload;
