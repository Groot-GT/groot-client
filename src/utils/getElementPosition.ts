import { RefObject } from 'react';

const getElementPosition = (ref: RefObject<HTMLElement>) => {
  const rect = ref.current?.getBoundingClientRect();

  if (!rect) {
    return undefined;
  }

  return {
    x: window.scrollX + rect.x + rect.width / 2,
    y: window.scrollY + rect.y + rect.height / 2,
  };
};

export default getElementPosition;
