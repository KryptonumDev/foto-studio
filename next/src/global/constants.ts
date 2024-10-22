/**
 * Global declaration of themeColor in HEX format.
 * @constant
 */
export const THEME_COLOR: string = '#ffffff';

/**
 * Global declaration of backgroundColor in HEX format.
 * @constant
 */
export const BACKGROUND_COLOR: string = '#ffffff';

/**
 * Global declaration of page language.
 * @constant
 */
export const LOCALE: string = 'pl';

/**
 * Global declaration of domain name of the website. Be aware of the protocol and www or non-www prefix.
 * @constant
 */
export const DOMAIN: string = 'https://adamchrapek.pl/';

/**
 * Global default title.
 * @constant
 */
export const DEFAULT_TITLE: string = 'Adam Chrapek Foto Studio';

/**
 * Global description.
 * @constant
 */
export const DEFAULT_DESCRIPTION: string = '';

/**
 * URL for the main icon.
 * @constant
 */
export const ICON_URL: string = `${DOMAIN}/assets/foto-studio-icon.png`;

/**
 * URL for the main logo.
 * @constant
 */
export const LOGO_URL: string = `${DOMAIN}/assets/foto-studio-logo.png`;

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
