import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export function useEmbla() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false });
  const [state, setState] = useState({
    canScrollPrev: false,
    canScrollNext: true
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    if (embla) {
      embla.on('select', () => {
        setState({
          canScrollPrev: embla.canScrollPrev(),
          canScrollNext: embla.canScrollNext()
        });
      });
    }
  }, [embla]);

  return {
    emblaRef,
    scrollPrev,
    scrollNext,
    ...state
  };
}
