import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useProgressWithInView() {
  const currentCard = useRef(0);
  const currentStatus = useRef<"one" | "two" | "tree" | "idle">("idle");
  const [progressLeft, setProgress] = useState(1);
  const [ref, inView] = useInView({ initialInView: true });

  function startProgress() {
    let interval = 100;

    const timer = setInterval(() => {
      interval--;

      if (interval >= 0) {
        setProgress(interval);
        return;
      }

      clearInterval(timer);
      interval = 100;
    }, 100);
  }

  useEffect(() => {
    if (inView) {
      currentCard.current = 0;
      startProgress();
    } else {
      currentCard.current = 0;
    }
  }, [inView]);

  useEffect(() => {
    if (progressLeft === 0) {
      startProgress();
      if (currentCard.current >= 2) {
        currentCard.current = 0;
      } else {
        currentCard.current = currentCard.current + 1;
      }
    }
  }, [currentCard, progressLeft]);

  
  function clickOnCard(card: number) {
    return () => {
      currentCard.current = card;
    };
  }
  const isActive = (at: number) => currentCard.current === at;

  return {
    ref,
    inView,
    isActive,
    currentStatus,
    progressLeft,
    currentCard,
    startProgress,
    clickOnCard,
  };
}
