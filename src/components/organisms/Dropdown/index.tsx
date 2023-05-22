import React, { useState, useRef, useEffect, SetStateAction } from 'react';
import DropdownList from 'src/components/molecules/DropdownList';
import ToggleButton from 'src/components/atoms/ToggleButton';
import Icon from 'src/components/atoms/Icon';
import { IconType } from 'src/types/icon';
import { SetterOrUpdater } from 'recoil';
import * as s from './style';

type DropdownProps = {
  items: string[];
  selectedItem: string;
  setSelectedItem:
    | React.Dispatch<SetStateAction<string>>
    | SetterOrUpdater<string>
    | ((value: string) => void);
  icons?: IconType[];
  borderNone?: boolean;
};

const defaultProps = {
  icons: undefined,
  borderNone: false,
};

const Dropdown = ({
  items,
  selectedItem,
  setSelectedItem,
  icons,
  borderNone,
}: DropdownProps) => {
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

  const handleOptionClick = (option: string) => {
    setSelectedItem(option);
    setOpen(false);
  };

  return (
    <s.DropdownWrapper ref={dropdownRef}>
      <s.SelectedItemPlaceHolder
        borderNone={borderNone}
        onClick={() => setOpen(!open)}
      >
        {icons ? (
          <s.SelectedIconWrapper>
            <Icon iconImg={icons[selectedItemIdx]} />
          </s.SelectedIconWrapper>
        ) : null}
        <s.SelectedItemWrapper>{selectedItem}</s.SelectedItemWrapper>
        <ToggleButton clicked={open} onClick={() => setOpen(!open)} />
      </s.SelectedItemPlaceHolder>
      {open ? (
        <DropdownList
          items={items}
          icons={icons}
          dropdownWidth={dropdownWidth}
          handleOptionClick={handleOptionClick}
        />
      ) : null}
    </s.DropdownWrapper>
  );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
