import { useRef, useEffect } from 'react';

import { useProgress } from '@/model/interactions/use-progress';
import { useInView } from 'react-intersection-observer';
import { Swiper as TSwiper } from 'swiper';

export function useSlide() {
  const [ref, inView] = useInView({ initialInView: true });
  const { progressLeft, startProgress } = useProgress();
  const currentStep = useRef<number>(0);
  const currentSwiper = useRef<TSwiper | undefined>(undefined);
  const swipeInstance = currentSwiper.current;

  useEffect(() => {
    if (inView && swipeInstance) {
      swipeInstance.slideTo(0);
      startProgress();
    }
  }, [inView]);

  useEffect(() => {
    if (progressLeft === 0 && swipeInstance) {
      startProgress();
      if (currentStep.current >= 2) {
        currentStep.current = 0;
        swipeInstance.slideTo(0);
      } else {
        currentStep.current = currentStep.current + 1;
        swipeInstance.slideNext();
      }
    }
  }, [progressLeft, currentStep, swipeInstance]);

  function clickOnCard(step: number) {
    return () => {
      currentStep.current = step;
      if (swipeInstance) swipeInstance.slideTo(step);
      startProgress();
    };
  }

  return { ref, currentStep, clickOnCard,progressLeft,currentSwiper };
}
