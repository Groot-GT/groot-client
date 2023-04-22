import React, { useState, useRef, useEffect } from 'react';
import DropdownList from 'src/components/molecules/DropdownList';
import ToggleButton from 'src/components/atoms/ToggleButton';
import Icon from 'src/components/atoms/Icon';
import { IconType } from 'src/types/icon';
import * as s from './style';
import { SelectedIconWrapper, SelectedItemWrapper } from './style';

type ToggleSelectorProps = {
  items: string[];
  icons?: IconType[];
}

const defaultProps = {
  icons: undefined,
};


const Dropdown = ({ items, icons }: ToggleSelectorProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    document.addEventListener('mousedown', ev => handleClickOutside(ev));
    return () => document.removeEventListener('mousedown', ev => handleClickOutside(ev));

  }, [dropdownRef, setOpen]);

  const handleOptionClick = (option: string) => {
    setSelectedItem(items.indexOf(option));
    setOpen(false);
  };

  return (
    <s.DropdownWrapper ref={dropdownRef}>
      <s.SelectedItemPlaceHolder onClick={() => setOpen(!open)}>
        <s.SelectedIconWrapper>
          {icons ? <Icon iconImg={icons[selectedItem]} /> : null}
        </s.SelectedIconWrapper>
        <s.SelectedItemWrapper>
          {items[selectedItem]}
        </s.SelectedItemWrapper>
        <ToggleButton clicked={open} onClick={() => setOpen(!open)} />
      </s.SelectedItemPlaceHolder>
      {open ?
        <DropdownList items={items} icons={icons} dropdownWidth={dropdownWidth} handleOptionClick={handleOptionClick} />
        : null}
    </s.DropdownWrapper>
  );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
