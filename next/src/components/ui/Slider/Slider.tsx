'use client';
import { createContext, useContext } from 'react';
import UseEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';

import type { SliderPropsTypes, SliderStateTypes, SliderContextTypes, SlidesPropsTypes } from './Slider.types';
import { useNavigation, usePagination } from './hooks';

import styles from './Slider.module.scss';

const SliderContext = createContext<SliderContextTypes>({} as SliderContextTypes);

const useSliderState = ({ align, activeSlideClassName }: SliderStateTypes) => {
  const options = { skipSnaps: true, loop: true, align: align || 'center' };

  const [emblaRef, emblaApi] = UseEmblaCarousel(options, [ClassNames({ snapped: activeSlideClassName })]);

  const { scrollSnaps, selectedIndex, onDotButtonClick } = usePagination(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useNavigation(emblaApi);

  return {
    emblaRef,
    scrollSnaps,
    selectedIndex,
    onDotButtonClick,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export default function Slider({ children, align, activeSlideClassName = '' }: SliderPropsTypes) {
  return (
    <SliderContext.Provider value={{ ...useSliderState({ align, activeSlideClassName }) }}>
      {children}
    </SliderContext.Provider>
  );
}

Slider.Slides = function SliderSlides({ children, className = '' }: SlidesPropsTypes) {
  const { emblaRef } = useContext(SliderContext);

  return (
    <div ref={emblaRef}>
      <div className={`embla__container ${className}`}>{children}</div>
    </div>
  );
};

Slider.Details = function SliderDetails({
  children,
}: {
  children: ((index: number) => React.ReactNode) | React.ReactNode;
}) {
  const { selectedIndex } = useContext(SliderContext);

  if (typeof children === 'function') return <>{children(selectedIndex)}</>;
  return <>{children}</>;
};

Slider.Controls = function SliderControls() {
  const {
    scrollSnaps,
    selectedIndex,
    onDotButtonClick,
    prevBtnDisabled,
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
  } = useContext(SliderContext);

  return (
    <div className={styles['SliderControls']}>
      <button
        className={styles.button}
        type='button'
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        aria-label='Przejdź do poprzedniego elementu'
      >
        {LeftArrowIcon}
      </button>
      <div className={styles.dots}>
        {scrollSnaps.map((_, index) => (
          <button
            key={`dot-${index}`}
            type='button'
            onClick={() => onDotButtonClick(index)}
            aria-current={index === selectedIndex}
            aria-label={`Przejdź do ${index + 1} elementu`}
          />
        ))}
      </div>
      <button
        type='button'
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className={styles.button}
        aria-label='Przejdź do następnego elementu'
      >
        {RightArrowIcon}
      </button>
    </div>
  );
};

const LeftArrowIcon = (
  <svg
    width='18'
    height='17'
    viewBox='0 0 18 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.97736 7.44554L9.08967 1.33323L8.02901 0.272565L0.572545 7.72903L0.0422146 8.25936L0.572545 8.78969L8.02901 16.2462L9.08967 15.1855L2.85471 8.95053L17.2335 8.46493L17.1829 6.96578L2.97736 7.44554Z'
      fill='#8F8F8F'
    />
  </svg>
);

const RightArrowIcon = (
  <svg
    width='18'
    height='17'
    viewBox='0 0 18 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.0226 7.44554L8.91032 1.33323L9.97098 0.272565L17.4274 7.72903L17.9578 8.25936L17.4274 8.78969L9.97098 16.2462L8.91032 15.1855L15.1453 8.95053L0.766479 8.46493L0.817108 6.96578L15.0226 7.44554Z'
      fill='#8F8F8F'
    />
  </svg>
);
