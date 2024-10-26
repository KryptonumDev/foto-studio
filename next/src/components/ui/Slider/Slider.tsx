'use client';
import { createContext, useContext, forwardRef, RefObject, useEffect } from 'react';
import UseEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';

import type {
  SliderPropsTypes,
  SliderStateTypes,
  SliderContextTypes,
  SlidesPropsTypes,
  ObserverPropsTypes,
} from './Slider.types';
import { useIntersection, useNavigation, usePagination } from './hooks';

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

Slider.Observer = forwardRef<HTMLDivElement, ObserverPropsTypes>(function Observer({ children, className = '' }, ref) {
  const { onPrevButtonClick, onNextButtonClick } = useContext(SliderContext);
  const isIntersecting = useIntersection({ containerRef: ref as RefObject<HTMLDivElement> });

  useEffect(() => {
    function keydownHandler(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') onPrevButtonClick();
      else if (e.key === 'ArrowRight') onNextButtonClick();
    }

    if (isIntersecting) document.addEventListener('keydown', keydownHandler);
    else document.removeEventListener('keydown', keydownHandler);

    return () => document.removeEventListener('keydown', keydownHandler);
  }, [isIntersecting, onNextButtonClick, onPrevButtonClick]);

  return (
    <div
      className={className}
      ref={ref}
    >
      {children}
    </div>
  );
});

Slider.Slides = function SliderSlides({ children, className = '', ...props }: SlidesPropsTypes) {
  const { emblaRef } = useContext(SliderContext);

  return (
    <div
      ref={emblaRef}
      {...props}
    >
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
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={17}
    fill='none'
    viewBox='0 0 18 17'
  >
    <path d='m2.97736 7.44554 6.11231-6.11231L8.02901.272565.572545 7.72903l-.5303304.53033.5303304.53033L8.02901 16.2462l1.06066-1.0607-6.23496-6.23497 14.37879-.4856-.0506-1.49915-14.20554.47976Z' />
  </svg>
);

const RightArrowIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={17}
    fill='none'
    viewBox='0 0 18 17'
  >
    <path d='M15.0226 7.44554 8.91032 1.33323 9.97098.272565 17.4274 7.72903l.5304.53033-.5304.53033-7.45642 7.45651-1.06066-1.0607 6.23498-6.23497-14.378821-.4856.050629-1.49915 14.205492.47976Z' />
  </svg>
);
