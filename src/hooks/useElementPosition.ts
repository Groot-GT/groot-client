import { useEffect, useRef, useState } from 'react';

const useElementPosition = () => {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setPosition({
        x: window.scrollX + rect.x + rect.width / 2,
        y: window.scrollY + rect.y + rect.height / 2,
      });
    }
  }, [ref]);

  return { ref, position };
};

export default useElementPosition;
