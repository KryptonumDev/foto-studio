import { RefObject } from 'react';

export type CursorTypes = {
  text?: string;
  active: boolean;
  trackingAreaRef: RefObject<HTMLElement | HTMLDivElement>;
};
