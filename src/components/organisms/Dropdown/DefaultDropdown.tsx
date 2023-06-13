import React, { useState, useRef, useEffect, SetStateAction } from 'react';
import DropdownList from 'src/components/molecules/DropdownList';
import ToggleButton from 'src/components/atoms/ToggleButton';
import Icon from 'src/components/atoms/Icon';
import { IconType } from 'src/types/icon';
import { SetterOrUpdater } from 'recoil';
import * as s from './style';

interface DropdownProps<T> {
  items: T[];
  selectedItem: T;
  setSelectedItem:
    | React.Dispatch<SetStateAction<T>>
    | SetterOrUpdater<T>
    | ((value: T) => void);
  icons?: IconType[];
  borderNone?: boolean;
  dropdownIcon?: IconType | null;
}

const defaultProps = {
  icons: undefined,
  borderNone: false,
  dropdownIcon: null,
};

const Dropdown = <T extends string | number>({
  items,
  selectedItem,
  setSelectedItem,
  icons,
  borderNone,
  dropdownIcon,
}: DropdownProps<T>) => {
  const [open, setOpen] = useState<boolean>(false);
  const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedItemIdx = items.indexOf(selectedItem);

  useEffect(() => {
    setDropdownWidth(dropdownRef.current?.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    const handleClickOutside = (ev: globalThis.MouseEvent): void => {
      const target = ev.target as HTMLElement;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', (ev) => handleClickOutside(ev));
    return () =>
      document.removeEventListener('mousedown', (ev) => handleClickOutside(ev));
  }, [dropdownRef, setOpen]);

  const handleOptionClick = (option: T) => {
    setSelectedItem(option);
    setOpen(false);
  };

  return (
    <s.DropdownWrapper ref={dropdownRef}>
      <s.SelectedItemPlaceHolder
        borderNone={borderNone}
        onClick={() => setOpen(!open)}
      >
        {dropdownIcon ? (
          <s.DropdownIconWrapper>
            <Icon iconImg={dropdownIcon} />
          </s.DropdownIconWrapper>
        ) : null}
        <s.SelectedItemWrapper>
          {icons ? (
            <s.SelectedIconWrapper>
              <Icon iconImg={icons[selectedItemIdx]} />
            </s.SelectedIconWrapper>
          ) : null}
          {selectedItem}
        </s.SelectedItemWrapper>
        <ToggleButton clicked={open} onClick={() => setOpen(!open)} />
      </s.SelectedItemPlaceHolder>
      <s.DropdownListWrapper width={dropdownWidth}>
        {open ? (
          <DropdownList<T>
            items={items}
            selectedItem={selectedItem}
            icons={icons}
            handleOptionClick={handleOptionClick}
          />
        ) : null}
      </s.DropdownListWrapper>
    </s.DropdownWrapper>
  );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
