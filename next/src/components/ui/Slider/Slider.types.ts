import { RefObject } from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import type { EmblaViewportRefType } from 'embla-carousel-react';

export type useIntersectionTypes = {
  containerRef: RefObject<HTMLDivElement>;
};

export type UsePrevNextButtonsTypes = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export type UseDotButtonTypes = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export type SliderContextTypes = {
  emblaRef: EmblaViewportRefType;
} & UseDotButtonTypes &
  UsePrevNextButtonsTypes;

export type SliderStateTypes = {
  align?: EmblaOptionsType['align'];
  activeSlideClassName?: string;
};

export type SliderPropsTypes = {
  children: React.ReactNode;
} & SliderStateTypes;

export type ObserverPropsTypes = {
  children: React.ReactNode;
  className?: string;
};

export type SlidesPropsTypes = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
