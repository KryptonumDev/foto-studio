import { DOMAIN, BACKGROUND_COLOR, DEFAULT_DESCRIPTION, DEFAULT_TITLE, THEME_COLOR } from '@/global/constants';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: DEFAULT_TITLE,
    short_name: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: BACKGROUND_COLOR,
    theme_color: THEME_COLOR,
    icons: [
      {
        src: `${DOMAIN}/foto-studio-icon-192.png`,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: `${DOMAIN}/foto-studio-icon-512.png`,
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: `${DOMAIN}/foto-studio-icon-mask.png`,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
