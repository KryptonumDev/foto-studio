/**
 * Global declaration of regex.
 * @constant
 */
export const REGEX: { email: RegExp; phone: RegExp } = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/,
};

/**
 * The initial number of posts displayed on the page.
 * @constant
 * @type {number}
 */
export const POSTS_PER_LOAD = 9;

/**
 * The initial number of images displayed on the page.
 * @constant
 * @type {number}
 */
export const IMAGES_PER_LOAD = 12;

/**
 * Declaration of global easing.
 * @constant
 */
export const EASING: number[] = [0.1, 0, 0.4, 1];
