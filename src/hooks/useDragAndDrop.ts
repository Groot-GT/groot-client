import { MutableRefObject, useEffect } from 'react';

interface DragAndDropParams {
  ref: MutableRefObject<HTMLElement | null>;
  onDragLeave?: (e: DragEvent) => void;
  onDragEnter?: (e: DragEvent) => void;
  onDrop: (e: DragEvent) => void;
}

const useDragAndDrop = ({
  ref,
  onDragLeave,
  onDragEnter,
  onDrop,
}: DragAndDropParams) => {
  useEffect(() => {
    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      if (onDragLeave) {
        onDragLeave(e);
      }
    };

    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault();
      if (onDragEnter) {
        onDragEnter(e);
      }
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      onDrop(e);
    };

    const element = ref.current;

    if (element) {
      element.setAttribute('draggable', 'true');
      element.addEventListener('dragleave', handleDragLeave);
      element.addEventListener('dragenter', handleDragEnter);
      element.addEventListener('dragover', handleDragOver);
      element.addEventListener('drop', handleDrop);
    }

    return () => {
      if (element) {
        element.removeEventListener('dragleave', handleDragLeave);
        element.removeEventListener('dragenter', handleDragEnter);
        element.removeEventListener('dragover', handleDragOver);
        element.removeEventListener('drop', handleDrop);
      }
    };
  }, [onDragEnter, onDragLeave, onDrop, ref]);
};

export default useDragAndDrop;
