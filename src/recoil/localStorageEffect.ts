import { AtomEffect } from 'recoil';

const localStorageEffect =
  <T>({ key, defaultValue }: { key: string; defaultValue: T }): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    const localStorageValue = localStorage.getItem(key);

    setSelf(
      localStorageValue !== null ? JSON.parse(localStorageValue) : defaultValue, // Abort initialization if no value was stored
    );

    // Subscribe to state changes and persist them to localForage
    onSet((newValue, oldValue, isReset) =>
      isReset
        ? localStorage.setItem(key, JSON.stringify(defaultValue))
        : localStorage.setItem(key, JSON.stringify(newValue)),
    );
  };

export default localStorageEffect;
