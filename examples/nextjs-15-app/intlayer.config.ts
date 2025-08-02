import { Locales, type IntlayerConfig } from 'intlayer';

export const locales = [Locales.ENGLISH, Locales.FRENCH, Locales.SPANISH];

/** @type {import('intlayer').IntlayerConfig} */
const config: IntlayerConfig = {
  internationalization: {
    locales,
    defaultLocale: Locales.ENGLISH,
    strictMode: 'strict',
  },
  content: {
    // contentDir: ['./', '../../apps'],
  },
  editor: {
    clientId: '1b1de2a7af81e2cd0bcd732269778b95',
    clientSecret:
      'd9469dcb8f9a60af20bc898bb84d9e4cafc3da8ea4cb44d69d0fd4e00dd38e40',
    applicationURL: 'http://localhost:3000',
  },
  build: {
    importMode: 'dynamic',
  },
};

export default config;
