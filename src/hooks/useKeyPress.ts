import { useEffect, useRef } from 'react';

const useKeypress = (key: string, handler: () => void) => {
  const eventListenerRef = useRef<(event: KeyboardEvent) => void>();

  useEffect(() => {
    eventListenerRef.current = (event: KeyboardEvent) => {
      if (key === event.key) {
        handler?.();
      }
    };
  }, [key, handler]);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => {
      eventListenerRef.current?.(event);
    };
    window.addEventListener('keydown', eventListener);
    return () => {
      window.removeEventListener('keydown', eventListener);
    };
  }, []);
};

export default useKeypress;
