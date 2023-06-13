import { MutableRefObject, useEffect } from 'react';

type DetectClickOutsideParams = {
  ref: MutableRefObject<HTMLElement | null>;
  callback: () => void;
};

const useDetectClickOutside = ({ ref, callback }: DetectClickOutsideParams) => {
  useEffect(() => {
    const handleClickOutside = (ev: globalThis.MouseEvent): void => {
      const target = ev.target as HTMLElement;
      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    };

    const pressEscKey = (ev: globalThis.KeyboardEvent): void => {
      if (ev.key === 'Escape') {
        callback();
      }
    };

    document.addEventListener('mousedown', (ev) => handleClickOutside(ev));
    document.addEventListener('keydown', (ev) => pressEscKey(ev));
    return () => {
      document.removeEventListener('mousedown', (ev) => handleClickOutside(ev));
      document.removeEventListener('keydown', (ev) => pressEscKey(ev));
    };
  }, [ref, callback]);
};

export default useDetectClickOutside;
